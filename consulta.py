from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
from time import *
from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/home', methods=['POST'])
def home():
    # ENTRANDO NA SEDE
    usuario = '0001112223334'
    senha = '12345678'

    driver = webdriver.Firefox()
    driver.get('https://sed.educacao.sp.gov.br/Inicio')
    sleep(5)

    # COLOCANDO O USUARIO
    campo_usuario = driver.find_element(By.XPATH, "//input[@id='name']")
    campo_usuario.send_keys(usuario)
    sleep(1)
    # COLOCANDO A SENHA
    campo_senha = driver.find_element(By.XPATH, "//input[@id='senha']")
    campo_senha.send_keys(senha)
    sleep(1)
    # CLICANDO NO BOTÃO DE ENTRAR
    botao_entrar = driver.find_element(By.XPATH, "//input[@id='botaoEntrar']")
    botao_entrar.click()
    sleep(1)

    # COLETAR DADOS DO ALUNO E RESPONSAVEL
    driver.get('https://sed.educacao.sp.gov.br/Aluno/ConsultaAluno')

    # NOME DO ALUNO
    input_nome_do_aluno = driver.find_element(By.XPATH, "//input[@id='NomeAluno']")
    aluno = input_nome_do_aluno.get_attribute("value")

    # NOME DO PAI
    input_nome_do_pai = driver.find_element(By.XPATH, "//input[@id='NomePai']")
    pai = input_nome_do_pai.get_attribute("value")

    # NOME DO MAE
    input_nome_do_mae = driver.find_element(By.XPATH, "//input[@id='NomeMae']")
    mae = input_nome_do_mae.get_attribute("value")

    # CPF DO ALUNO
    input_cpf = driver.find_element(By.XPATH, "//input[@id='CpfAluno']")
    cpf = input_cpf.get_attribute("value")

    # RG DO ALUNO - DIGITO
    input_rg = driver.find_element(By.XPATH, "//input[@id='RgAluno']")
    rg = input_rg.get_attribute("value")
    input_rg_digito = driver.find_element(By.XPATH, "//input[@id='DigRgAluno']")
    rg_digito = input_rg_digito.get_attribute("value")

    # ENDEREÇO
    input_endereco = driver.find_element(By.XPATH, "//input[@id='Endereco']")
    endereco = input_endereco.get_attribute("value")

    # ENDEREÇO BAIRRO
    input_bairro = driver.find_element(By.XPATH, "//input[@id='EnderecoBairro']")
    bairro = input_bairro.get_attribute("value")
    
    return aluno

if __name__ == '__main__':
   app.run(debug=True)
