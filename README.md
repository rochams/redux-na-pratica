#### Ordem cronológica de implementação básica de redux:

- Criação de um diretório store, no qual será criado o 'storeConfig.js' criado nesse app, usando os métodos de createStore e combineReducers (depende da versão);
- Importação do storeConfig na página inicial do app, importação do provider para envelopar o módulo principal e inlcuir o store no provider;
- No app principal e nos demais módulos necessários, criar a função mapStateToProps para mapear os estados para as props respectivas e assim propagar os dados;
- Ou seja, ele mapeia os dados que estão no meu reducer para o componente em que a funcao mapStateToProps está sendo criada.
- E essa conexão é realizada através do método connect, que as conecta entre si como sugere o nome.

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

function mapActionCreatorToProps() {
    actionOne: function (num) {
        actionCreatorCriada(num)
    }
}
```

- Mapeamento da função de action creator para o estado da aplicação usnado o connect:
```
export default connect(mapStateToProps, mapActionCreatorToProps)(App);
```

- Implementação do dispatch para disparar o evento gerado a partir do action creator e propagar par o estado de todos os módulos que estão o utilizando;

```
function mapActionCreatorToProps(dispatch) {
    return {
        actionOne: function(arg) {
            const resultActionOne = actionCreatorCriada(arg)
            dispatch(resultActionOne)
        }
    }
}
```