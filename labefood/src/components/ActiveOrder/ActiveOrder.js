import React, { useContext } from "react"
import { GlobalOrderContext } from '../../Context/OrderContent/GlobalOrderContext'
import clock from "../../assets/clock.png"
import { Container, ContainerActiveOrder, ContainerImg, ImgClock, Pedido, SubTotal } from "./style"


export const ActiveOrder = () => {
  const { activeOrder, getActiveOrder } = useContext(GlobalOrderContext)
  getActiveOrder()
  return (
    <div>
      {activeOrder.order && (
        <ContainerActiveOrder>
          <Container>
            <ContainerImg>
            <ImgClock src={clock} alt="relógio" />
            </ContainerImg>
            <div>
              <Pedido id={"title"}>Pedido em andamento</Pedido>
              <p>{activeOrder.order.restaurantName}</p>
              <SubTotal id={"price"}>
                SUBTOTAL: R$ {activeOrder.order.totalPrice.toFixed(2)}
              </SubTotal>
            </div>
          </Container>
        </ContainerActiveOrder>
      )}
    </div>
  )
}
