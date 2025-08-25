# Chatbot Ollama + Flask API + React FrontEnd

Este projeto é um **chatbot local que usa Ollama (LLaMA 3) integrado com LangChain**, com uma **API Flask** em python que pode ser consumida por um frontend, como React.

Este Chatbot local utiliza um ambiente virtual em python, para funcionar corretamente com o ambiente deve rodar o ambiente local com um terminal separado e outro terminal com o ambiente para a API python flask.

---

## 🚀 Pré-requisitos

- Windows
- Python 3.12+
- PowerShell
- Ollama instalado

---

## ⚡ Passos para configurar

### 1. Verificar se o Ollama está instalado (Caso não esteja instale em: https://ollama.com/)
```powershell
ollama
```

### 2. Instalar o modelo LLaMA 3 (Ou semelhante, para mais informação veja em: https://github.com/ollama/ollama)
```powershell
ollama pull llama3
```

### 3. Testar o modelo no terminal
```powershell
ollama run llama3
```
- Use `/bye` para sair.

---

### 4. Criar o ambiente virtual Python
```powershell
python3 -m venv chatbot
```

### 5. Ativar o ambiente virtual no PowerShell
```powershell
.\chatbot\Scripts\Activate.ps1
```

### 6. Instalar dependências dentro do ambiente virtual
```powershell
pip install langchain langchain-ollama ollama

pip install flask
```

---

## 🛠 API Flask

### 1. Instalar Flask
```powershell
pip install flask
```

### 2. Rodar a API
```powershell
python main.py
```
- A API estará disponível em `http://127.0.0.1:5000`.

---

### 3. Testar a API com PowerShell
```powershell
$headers = @{ "Content-Type" = "application/json" }
$body = '{ "message": "Olá, tudo bem?" }'
$utf8Body = [System.Text.Encoding]::UTF8.GetBytes($body)

Invoke-RestMethod -Uri "http://127.0.0.1:5000/chat" -Method POST -Headers $headers -Body $utf8Body
```

- A resposta será algo como:
```json
{
  "response": "Estou bem, obrigado! E você?"
}
```

---

## ✅ Observações

- Mantenha sempre o ambiente virtual ativo quando trabalhar com o projeto.
- O modelo LLaMA 3 precisa de estar instalado e o Ollama a rodar localmente para a API funcionar.
- O chatbot mantém o contexto da conversa dentro da sessão da API.

--- 

##  Implementações futuras:

- FrontEnd utilizando React
- Histórico de conversas guardado em base de dados MongoDB

---

## Estrutura da API 

```plaintext
Chatbot_Ollama/
│── app/
│   ├── __init__.py
│   ├── controllers/
│   │   └── chatbot_controller.py
│   ├── models/
│   │   └── chatbot_model.py
│   └── routes.py
│
│── main.py
```

---

## Tecnologias

- Python
- Flask
- Ollama
- Llama3
- Longchain
- React
- MongoDB

---

## 👨‍💻 Autor

Diogo Gomes - https://github.com/a23893 / https://github.com/diogo22gomes

---

Feel free to contribute or report issues!