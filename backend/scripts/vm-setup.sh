#!/bin/bash

# Script de configuración para VM PostgreSQL
echo "Configurando PostgreSQL en VM..."

# Variables
DB_NAME="consultorio_medico"
DB_USER="consultorio_user"
DB_PASSWORD="SecurePassword123!"

# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Configurar PostgreSQL para conexiones remotas
sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /etc/postgresql/*/main/postgresql.conf

# Agregar regla de autenticación
echo "host    all             all             0.0.0.0/0               md5" | sudo tee -a /etc/postgresql/*/main/pg_hba.conf

# Reiniciar PostgreSQL
sudo systemctl restart postgresql

# Crear base de datos y usuario
sudo -u postgres psql << EOF
CREATE DATABASE $DB_NAME;
CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
\c $DB_NAME
GRANT ALL ON SCHEMA public TO $DB_USER;
EOF

# Configurar firewall
sudo ufw allow 5432
sudo ufw enable

echo "Configuración completada!"
echo "Base de datos: $DB_NAME"
echo "Usuario: $DB_USER"
echo "Puerto: 5432" 