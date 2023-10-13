from flask import Flask, render_template
from selenium import webdriver

app = Flask(__name__)

@app.route('/consulta')
def index():
    # Inicialize o driver do navegador (no exemplo, usaremos o Chrome)
    driver = webdriver.Chrome()

    # Abra uma página da web e faça alguma ação (exemplo: obter título da página)
    driver.get('https://www.exemplo.com')
    title = driver.title

    # Feche o navegador
    driver.quit()

    # Renderize o resultado no template HTML
    return render_template('template.html', title=title)

app.run()
