# Exercício 06

Para este exercício, iremos explorar a criação de uma aplicação mobile com React Native bem como o seu teste em nossos dispositivos. Para isso, siga o passo a passo abaixo:

## Passo 1

Iremos utilizar o expo.io para criar a nossa base inicial. Para isso, abra o terminal e digite ```npx expo-cli init HelloReactNative```.
Passo 2
Selecione a primeira opção, conforme imagem (“Managed workflow - blank”)
Digite um nome para sua aplicação e aperte enter.

## Passo 3

Para evitar a necessidade de instalar o expo-cli globalmente na página, abra o projeto criado no vscode (code HelloReactNative) e substitua o conteúdo da propriedade “scripts” para o seguinte conteúdo:

```
"start": "npx expo-cli start",
"android": "npx expo-cli start --android",
"ios": "npx expo-cli start --ios",
"web": "npx expo-cli start --web",
"eject": "npx expo-cli eject"
```

Através da linha de comando, entre na pasta criada (HelloReactNative) e digite “yarn start”. Você será direcionado a página do Expo.


## Passo 4

Em seu celular, baixe o aplicativo Expo Client, disponível para Android e iOS.


## Passo 5
Crie uma conta no Expo. Assim que tiver uma conta criada, conecte o seu celular na mesma rede que o computador, abra o seu leitor de QRCode e escaneie o código disponível em http://localhost:19002/.
Caso não seja possível conectar na mesma rede, altere a opção connection para Tunnel, localizado acima do QRCode em localhost.
