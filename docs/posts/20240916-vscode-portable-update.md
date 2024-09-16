---
title: "Actualizando Visual Studio Code Portable"
tags: ["vscode", "windows"]
date: 2024-09-13T17:00:00-05:00
---
# 20240913: Actualizando VSCode Portable

<TagsLinks />

- Previamente: [Usando Visual Studio Code Portable](20240127-vscode-portable)

## ¿Cómo actualizar vscode portable?

- Tengo instalado vscode portable en `D:\apps\vscode-portable`
- Para facilitar los updates, uso symlinks

```sh
cd apps
# muevo `vscode-portable\data` como `vscode-portable-data`
move vscode-portable\data vscode-portable-data
# renombro vscode-portable
move vscode-portable vscode-portable_
# creo vscode-portable que apunta a cierta version de vscode portable
mklink /D vscode-portable VSCode-win32-x64-1.85.2
cd vscode-portable
# creo data que apunta a vscode-portable-data
mklink /D data ..\vscode-portable-data
```

## ¿Cómo facilitar el update?

- Requisitos y suspuestos
    - La data se guarda en el symlink `data` que apunta a una carpeta externa `vscode-portable-data`
    - Tener el zip que vscode portable permite descargar
        - Por ejemplo `VSCode-win32-x64-1.93.0.zip`
    - El contenido del zip se descargará en una carpeta con el mismo nombre
        - Por ejemplo `VSCode-win32-x64-1.93.0`
    - Se eliminará el symlink `vscode-portable` existente para crear uno nuevo que apunte a la nueva carpeta
        - `vscode-portable --> VSCode-win32-x64-1.93.0`
    - Dentro del nuevo vscode-portable, se creará un nuevo symlink `data` que apunte al `vscode-portable-data` existente
        - `vscode-portable\data --> vscode-portable-data`
- Con ayuda de ChatGPT, creo `vscode-portable-update-using-zip.bat`

```sh
@echo off
setlocal

rem Verificar si se proporcionó un parámetro
if "%~1"=="" (
    echo Por favor, proporciona el nombre del archivo ZIP.
    echo Uso: %~nx0 nombre_del_archivo.zip
    exit /b 1
)

rem Obtener el nombre del archivo ZIP sin la extensión
set "zipfile=%~1"
set "foldername=%~n1"

rem Crear la carpeta de destino
echo Creando carpeta de destino "%foldername%"...
mkdir "%foldername%"

rem Descomprimir el archivo ZIP en la carpeta de destino
echo Descomprimiendo "%zipfile%" en carpeta de destino "%foldername%"...
tar -xf "%zipfile%" -C "%foldername%"

rem Eliminar el symlink existente
echo Eliminando symlink vscode-portable...
rmdir vscode-portable

rem Crear el nuevo symlink a la nueva versión
echo Creando symlink vscode-portable hacia carpeta de destino "%foldername%"...
mklink /D vscode-portable "%foldername%"

rem Crear el symlink a la carpeta de datos
echo Creando symlink data hacia vscode-portable-data
cd vscode-portable
mklink /D data ..\vscode-portable-data

echo Proceso completado exitosamente.

endlocal

```

- Ejemplo de uso

```sh
vscode-portable-update-using-zip.bat
Por favor, proporciona el nombre del archivo ZIP.
Uso: vscode-portable-update-using-zip.bat nombre_del_archivo.zip

vscode-portable-update-using-zip.bat VSCode-win32-x64-1.93.0.zip
```