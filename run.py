from app import app
import config as CFG



app.run(host='0.0.0.0', debug=CFG.DEBUG)
