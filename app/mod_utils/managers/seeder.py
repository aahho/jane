from base import BaseSeeder
from app.mod_database import models
import fileop

class FirstTimeDataSeeder(BaseSeeder):
    json_path = 'mod_utils/stockdetails'

    def run(self):
        # json_files = fileop.get_all_files(json_path, extension='json')
        print "worked"
