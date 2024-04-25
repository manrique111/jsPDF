#!/bin/bash

# echo "Actualizando Variables de Entorno ..."

# envsubst < /app/src/assets/js/env.tmpl.js > /app/src/assets/js/env.js "$(printf '${%s} ' $(env | cut -d'=' -f1))"

echo "instalar"
yarn install


 while true
do
  sleep 20
done


