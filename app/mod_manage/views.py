
from app.mod_repository.stocktwist import CompanyRepo, UserRepo, UploadRepo

def list_companies():
    return CompanyRepo().paginate()

def get_company_details(company_id):
    return CompanyRepo().filter(id=company_id)

def update_company(company_id, data):
    return CompanyRepo().filter(id=company_id).update(**data)

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
    return UploadRepo().objects.filter(id=upload_id).update(**data)

