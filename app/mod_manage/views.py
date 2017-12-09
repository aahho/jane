from flask import session

from app.mod_repository.stocktwist import CompanyRepo, UserRepo,\
        UploadRepo, CompanyDetailsRepo, AdminUserRepo
from app.mod_utils import helper

def list_companies():
    return CompanyRepo().paginate()

def get_company_details(company_id):
    return CompanyRepo().filter(id=company_id).first()

def update_company(company_id, data):
    company = get_company_details(company_id)
    d = data.get('otherDetails', [])
    company.name = data.get('name', company.name)
    company.code = data.get('code', company.code)
    company.description = data.get('name', company.description)
    company.stockExchangeCode = data.get('stockExchangeCode', company.stockExchangeCode)
    company.logo = data.get('logo', company.logo)
    print len(d)

    # delete the key which is not in data but in details
    if company.details is None:
        details = CompanyDetailsRepo.model(**d)
        details.save()
        company.details = details
    else:
        if len(d) == 0:
            company.details.delete()
            company.details = None
        else:
            company.details.delete()
            for key, value in d.iteritems():
                company.details.__setattr__(key, value)
            company.details.save()
    company.save()
    return company

def create_user(data):
    pass

def list_users():
    return UserRepo().paginate()

def get_user_details(user_id):
    return UserRepo().objects.filter(id=user_id)

def update_user(user_id, data):
    return UserRepo().objects.filter(id=user_id).update(**data)

def update_upload(upload_id, data):
    if 'id' in data: del data['id']
    # if we give 'size' as attr it is giving error so make it '_size'
    if 'size' in data: data['_size'] = data['size']; del data['size'];
    return UploadRepo().objects.filter(uploaderId=upload_id).update(**data)

def login_admin(data):
    admin = AdminUserRepo().filter(email=data.get('email', None)).first()
    if not admin:
        return False, "User not found"
    if helper.check_hash(data.get('password', None), admin.password):
        session['admin'] = admin.__dict__
        return True, admin
    return False, 'Invalid Credential'
