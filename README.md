Clone esse repositório.
Crie um virtualenv com Python 3.
Ativo ou virtualenv.
Instale as dependências.
Rodei as migrações.
git clone https://github.com/rg3915/estoque.git
cd estoque
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python contrib/env_gen.py
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
