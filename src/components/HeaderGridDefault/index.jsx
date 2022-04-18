
import { Container } from './styles';
import iconPrint from '../../assets/icon-print.svg';
import iconExport from '../../assets/icon-export.svg';
import iconCalendar from '../../assets/icon-calendar.svg';

export function HeaderGridDefault({ title }) {
  return (
    <>
      <Container>

        <div className="container-title">
          <h3>{title}</h3>

          <div className="grid-1-menu">
            <img src={iconCalendar} alt="" />
          </div>
        </div>

        <div className='container-buttons'>
          <button>
            <img src={iconPrint} alt="" />
            Imprimir
          </button>

          <button>
            <img src={iconExport} alt="" />
            Exportar
          </button>
        </div>

      </ Container>
    </>
  )
}