from flask import url_for

from app import app
from base import BaseCommand
from app.mod_utils import helper

class ListRoutes(BaseCommand):
    
    def run(self):
        import urllib
        output = []
        for rule in app.url_map.iter_rules():

            options = {}
            for arg in rule.arguments:
                options[arg] = "[{0}]".format(arg)

            methods = ','.join(rule.methods)
            url = url_for(rule.endpoint, **options)
            line = urllib.unquote("{:50s} {:20s} {}".format(rule.endpoint, methods, url))
            output.append(line)
        
        for line in sorted(output):
            print line

class CreateAdminUser(BaseCommand):

    def __init__(self):
        from app.mod_repository.stocktwist import AdminUserRepo
        self.admin_user_repo = AdminUserRepo()

    #option_list = (
    #    Option('--all', '-a', dest='seed_all', default=False, required=False),
    #    Option('--module', '-m', dest='module', default=None),
    #)

    def run(self):
        print "creating admin user"
        email = raw_input("Enter Email : ")
        password = raw_input("Enter Password : ")
        password = helper.hash_it(password)
        admin = self.admin_user_repo.create(email=email, password=password)
        if admin:
            print "Admin created successfully"
        else:
            print "Admin creation failed"

