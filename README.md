#### Ordem cronológica de implementação básica de redux:

- Criação de um diretório store, no qual será criado o 'storeConfig.js' criado nesse app, usando os métodos de createStore e combineReducers (depende da versão);
- Importação do storeConfig na página inicial do app, importação do provider para envelopar o módulo principal e inlcuir o store no provider;
- No app principal e nos demais módulos mnecessários, criar a função mapStateToProps para mapear os estados para as props respectivas e assim propagar os dados;

```
const mapStateToProps = (state) => {
  return {
    time1: state.time1,
    time2: state.time2
  }
}
```
```
export default connect(mapStateToProps)(App);
```

- Utilização teste das props no local desejado, como `props.time1` no caso acima para utilizar os dados que vem da storeConfig;

##### Etapa2:
- Criação do diretório `actions` no diretorio store, onde serão criados os arquivos que conterão as lógicas de `action creator`;
- Importação do(s) action(s) creator(s) no módulo principal, e criação da função que chama o action:

```
import { actionCreatorCriada } from '../store/actions/action...';  

function mapActionCreatorToProps(num) {
    actionOne: actionCreatorCriada(num)
}
```

- Mapeamento da função de action creator para o estado da aplicação usnado o connect:
```
export default connect(mapStateToProps, mapActionCreatorToProps)(App);
```

