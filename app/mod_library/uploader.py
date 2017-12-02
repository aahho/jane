import requests

from app.mod_library.exception import SException

class Uploader(object):
    # URL of microservice
    URL = "http://139.59.31.181/service/s3/upload?app=noodlestock"
    
    def upload(self, file_obj, to='s3'):
        file_data = self.format(file_obj)
        response = requests.post(self.URL, files=file_data)
        if response.status_code == 200:
            try:
                return response.json()['data'][0]
            except Exception as e:
                raise SException

    def format(self, file_obj):
        return {
            'files[]': file_obj
        }


def upload(file_obj):
    return Uploader().upload(file_obj)
