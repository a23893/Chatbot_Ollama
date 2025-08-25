from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

template = """
Answer the question below.

Here is the conversation history: {context}

Question: {question}

Answer:
"""

# Define modelo Ollama
model = OllamaLLM(model="llama3")
prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model


class Chatbot:
    def __init__(self):
        self.context = ""

    def ask(self, question: str) -> str:
        result = chain.invoke({"context": self.context, "question": question})
        self.context += f"You: {question}\nBot: {result}\n"
        return result
