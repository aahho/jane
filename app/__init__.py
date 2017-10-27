import pytz
# Import flask and template operators
from flask import Flask, render_template
from flask_mongoalchemy import MongoAlchemy
from flask_cors import CORS
from  mod_database.models import db
from app.mod_library import exception, response

# Define the WSGI application object
app = Flask(__name__)

# CORS for application
CORS(app)

# Configurations
app.config.from_object('config')

# init database
db.init_app(app)

# Sample HTTP error handling
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(exception.SException)
def own_error(error):
    return response.exception(error)

# Import a module / component using its blueprint handler variable (mod_auth)
# from app.mod_auth.controllers import mod_auth as auth_module
from app.mod_library.baseLib import mod_lib as BaseLib
from app.mod_library.router import api_parent as APIParent
from app.mod_sandbox.controllers import mod_sandbox as sandbox
from app.mod_home.controllers import mod_home as home
from app.mod_dashboard.controllers import mod_dashboard as dashboard
from app.mod_manage.controllers import mod_manage as manage


app.register_blueprint(home)
app.register_blueprint(dashboard)
app.register_blueprint(manage)
app.register_blueprint(sandbox)
app.register_blueprint(BaseLib)
app.register_blueprint(APIParent)

private_key = """-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA2rDb/7Tz/yRBBPLZAJ1bn6D0qYpMln/KvTWkS9SCrukiorPO
yhlFeecQHnRU8OWyaRwYog9ziVp3xKUy7PjzJBXRrmheR3BXM15rMLRtHGmZDI0H
hyImKFCVQgAxeb7RkEji7/F+xpzARN9dyEY/QtqSLJF91BGcvqSojZIzLFnQ3ste
gSVcRUQoomYmqtKuD9h8Zieu6LPXSalU9ymjMgZXR/HUyLOGEB330XlAsp/yEOmF
5C/Z0C9wYPh0oyDo9PKg84Of8JJZaZuO2BVOyvJchZ4Aq9i32qb3MmEtIdTPDDCu
DLmMukCz9w4GCmYGzsswXAZ3l/niEHZe/HWpBQIDAQABAoIBAQDWE28on2CCkGC9
kWRvv5pjZtJZ7LIQWUSDd7E/MeZDhqCLGO0C1T43mMMkrMhBkPjW/9P1QJ7fBBpd
+0EgzIpm9pzt1+kCkawq8vCHGvf8ajqSGLQXyowDxu51T28fOHY4gcD1FTf/AI8O
XIGXfXyL2x5gVoQQRrVjwhfljgpeDDaslX9srd+cufwYhvEU4Yv+ZQpcgAdFsfgM
IGE4eUh/4LyZcx5R7YbzguwbQp0e+A7Pc1Zg79wNr+l4+XWM8p1omIQi3KaDAAZw
cBciIWNepMsQocAvtFsbhTstSw/3DxzkhDA6gVrVlXZEf50J5w01yzfYcYFOuO9w
4Y+wZXpBAoGBAO+6OVRiPTeZh4xHgZUIwJNgoHgaybHh6Ym0ln/YVZqfUeAkFA96
IT2QJyD9l3rLZeXTM+4G77PqzUvOmyTCxVnD2xwxAUoPQrDolTjnDW/VGadkN+A4
8EKxFGn64GjQkp5yTV8GHVhVxWzmhT7gsk6bAolgFzF6eNl9dOi/ePQ5AoGBAOmJ
FHYwH8rL9POv1hfg9wGFb2qcK9BkGtB5mA78W3CVB8hynSrHUEErWjGRjwK8CbeN
AYXwNDqPY/MqxSHRTiJcXTItUB9vwBHpml1/mwfkyniRBegxxEDnlf0S1I1egJub
70bj/8aUu3WyUEB5EhiTM1M2B4tjPUB/FOabppMtAoGANqjwb3Qi3y2LgYnAWxnu
xuvOSvRYrs2C8VoSwr2x7xqKkZ/ITysary3SLiyEQIRmDHwWqBw+xXgxLSrDpyMd
2nTU3d2ynI9UNoAhniLYpnohalBoiSCSb7JupCeGyX9dHvGTAKqlQEH2TPlWwlp7
bX7cmjQltatmKLj5UiRuUMkCgYBdNU4KYei+eyr3++06OJq9a7FtXomKMfoVzQIo
sQYZ6BFkKoKaKVTZveDQueTXVY+XR9scxyNBYCunSSHG/o/t3OmBdl5tPZ/uRktL
F/wbaXB6MH+oDfzjXssZZ+OXzOkNsm4M4EEc1A4ByrqHEQts7YtlocHfGyu+Szpf
VC5mvQKBgQC/+2jFqf5ErT1KIsYCTAtflaTyugkKwpd4THud4YCay264B8ZN+vD1
EC76HfDMJWlhvpeqkTazIr8zgA/mDhQAveIC9XNJf6Y7XAVu9uZ4/GmTpkqS7uqO
FhNYZpUeLpnale7PkO5k54OZ5dJSn8yfTBNtq/Olew1HObFynWrH+g==
-----END RSA PRIVATE KEY-----"""

import base64
pubkey = private_key
b64data = '\n'.join(pubkey.splitlines()[1:-1])
derdata = base64.b64decode(b64data)
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.serialization import load_der_public_key
from cryptography.hazmat.primitives.asymmetric import dsa, rsa
from cryptography.hazmat.primitives.serialization import load_pem_private_key
import jwt
#key = load_der_public_key(derdata, default_backend())
key = load_pem_private_key(private_key, password=None, backend=default_backend())
j = jwt.encode({'sss': 'sssssss', 'd': 'ddd', 'g': 'sfsdgsdf', 'r': 'sdfsdgsdfsdfs'}, key, algorithm='PS256')
#print j
