import './App.css';
import Card from './components/Card';
import { connect } from 'react-redux';
import { updateGoal } from './store/actions/match-stats';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
    
      </header>
      <main className='center'>
        <h2 className='text-white'>Praticando React-Redux</h2>
        <div className='flex'>
          <Card time="Cruzeiro"
            golsTime1={ props.time1.gols }
            golsTime2={ props.time2.gols }
            source1={ props.time1.source}
            source2={ props.time2.source }
            escanteios1={props.time1.escanteios}
            cartoesAmarelos1={props.time1.cartoesAmarelos}
            cartoesVermelhos1={props.time1.cartoesVermelhos}
            escanteios2={props.time2.escanteios}
            cartoesAmarelos2={props.time2.cartoesAmarelos}
            cartoesVermelhos2={props.time2.cartoesVermelhos}
            width={70}
            height={70}
            updateGoal={props.newGoal}
          >
          </Card>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    time1: state.time1,
    time2: state.time2
  }
}

const mapCreateActionToProps = function (dispatch) {
  return {
    newGoal: (time) => {
      const actionUpdateGoal = updateGoal(time)
      dispatch(actionUpdateGoal)
    }
  }
}

export default connect(mapStateToProps, mapCreateActionToProps)(App);
