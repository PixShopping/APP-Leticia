from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/consulta', methods=['POST'])
def executar_script():
   usuario = request.form['usuario']
   senha = request.form['senha']

   # Execute seu script Python com os parâmetros
   comando = ['python', 'consulta.py', usuario, senha]
   resultado = subprocess.check_output(comando)
   return resultado

if __name__ == '__main__':
   app.run(debug=True)
