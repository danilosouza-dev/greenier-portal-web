import { Sidebar } from "../../components/Sidebar";
import { Container, Wrapper, ContainerHeader, ContainerGrid1Body } from "./styles";
import iconFilter from '../../assets/icon-filter.svg';
import iconWiOff from '../../assets/wifi-off.svg'
import iconWifiOn from '../../assets/icon-wifi-on.svg'
import iconInfo from '../../assets/info-icon.svg'
import iconPontos from '../../assets/pontos-icon.svg'
import iconPlus from '../../assets/icon-plus.svg'
import { HeaderGridDefault } from "../../components/HeaderGridDefault";


export function Home() {
  return (
    <>
      <Sidebar />
      <Container>
        <Wrapper>

          <div className="grid1">
            <ContainerHeader>
              <div>
                <h3>Pontos de vendas</h3>
                <p>Status/Localização</p>
              </div>

              <div className="grid-1-menu">
                <button>
                  <img src={iconPlus} alt="" />
                  Ponto de Venda
                </button>
                <img src={iconFilter} alt="" />
              </div>
            </ContainerHeader>

            <ContainerGrid1Body>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Primeiro</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWiOff} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWiOff} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWiOff} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Garcia D'ávila, Térreo</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

              <div className="grd-1-item">

                <div className="item">
                  <img src={iconWifiOn} alt="" />
                  <p>Edifício Último</p>
                </div>

                <div className="item-icons">
                  <img
                    src={iconInfo}
                    alt=""
                    className="icon-info"
                  />
                  <img
                    src={iconPontos}
                    alt=""
                    className="icon-pontos"
                  />
                </div>

              </div>

            </ContainerGrid1Body>
          </div>

          <div className="cgT">
            <div className="grid2">
              <HeaderGridDefault title="Ranking de vendas" />
            </div>

            <div className="grid3">
              <HeaderGridDefault title="Dados analíticos" />
            </div>
          </div>
        </ Wrapper>
      </Container>
    </>
  )
}