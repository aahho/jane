
from base import SeedManager
from seeder import FirstTimeDataSeeder, StockGetter, SlugMaker
from managers import *

def sub_opts(app, **kwargs):
    pass

seed_manager = SeedManager(sub_opts)

# Here we will have to pass app manually which may create whole new app space
# seed_manager = SeedManager(app) 

seed_manager.add_command('FirstTimeDataSeeder', FirstTimeDataSeeder())
seed_manager.add_command('update_stocks', StockGetter())
seed_manager.add_command('slug', SlugMaker())
