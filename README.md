# Jararaquinha

GruPy-RN Event Check-in Client

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- Node
- Yarn

### Installing

Follow the steps bellow to run a development environment.

Considering that you are in this project root directory or [Jararaca](https://github.com/grupyrn/jararaca)'s, install the dependencies.

```
yarn install
```

### Running

Run the development server

```
yarn start
```

Enter http://localhost:3000/assets/bundles/index.html


### Building

Generate the bundle

```
yarn build
```

### API Access

You will notice there's no API key field by default in the configuration file in `/src/js/api/API.js`. That's because this project uses the shared session credentials from [Jararaca](https://github.com/grupyrn/jararaca).

Although this project lies in a separate repository, it is a highly tied client for the [Jararaca](https://github.com/grupyrn/jararaca) API and is meant to run together with its server. 
