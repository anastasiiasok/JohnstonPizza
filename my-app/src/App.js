import "./App.css";
import { Header, Categories, SortPopup } from "./components";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories
                onClickItem={(name) => console.log(name)}
                items={[
                  "Meat",
                  "Vegetarian",
                  "Grilled",
                  "Spicy",
                  "Salads",
                  "Cheesesticks",
                  "Beverages",
                ]}
              />
              <SortPopup />
            </div>
            <h2 className="content__title">All Pizza</h2>
            <div className="content__items">
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/chickenbbq.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Chicken BBQ</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm </li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 8.00</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{" "}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/supreme.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Supreme</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 9.00</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{" "}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/hawaiian.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Hawaiian</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 11.00</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{" "}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/spinachfeta.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Spinach Feta</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 11.99</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{" "}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/buffalochicken.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Buffalo Chicken</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 9.99</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{" "}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/pepperoni.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Pepperoni</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 10.99</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{" "}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/special.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">JC Special Pizza</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 12.99</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{" "}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/vegan.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Veggie</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 10.99</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>{" "}
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/cheese.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Cheese</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 7.99</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/shrimp.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Shrimp Cheesesticks</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $17.99</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/garlic.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Garlic Cheesesticks</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 10.99</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>
              <div className="pizza-block">
                <img
                  className="pizza-block__image"
                  src="./img/bacon.png"
                  alt="Pizza"
                />
                <h4 className="pizza-block__title">Bacon Cheesesticks</h4>
                <div className="pizza-block__selector">
                  <ul>
                    <li className="active">thin</li>
                    <li>traditional</li>
                  </ul>
                  <ul>
                    <li className="active">26 cm</li>
                    <li>30 cm</li>
                    <li>40 cm</li>
                  </ul>
                </div>
                <div className="pizza-block__bottom">
                  <div className="pizza-block__price">from $ 12.99</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add</span>
                    <i>2</i>
                  </div>
                </div>
              </div>
              <h2 className="content__title">Drinks</h2>
              <div className="content__items">
                <div className="pizza-block">
                  <img
                    className="pizza-block__image"
                    src="./img/pepsi.png"
                    alt="Pizza"
                  />
                  <h4 className="pizza-block__title">Pepsi </h4>
                  <p>2 L</p>
                  <div className="pizza-block__bottom">
                    <div className="pizza-block__price">$2.60</div>
                    <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>Add</span>
                      <i>2</i>
                    </div>
                  </div>
                </div>
                <div className="pizza-block">
                  <img
                    className="pizza-block__image"
                    src="./img/dietpepsi.png"
                    alt="Pizza"
                  />
                  <h4 className="pizza-block__title">Diet Pepsi</h4>
                  <p>2 L</p>

                  <div className="pizza-block__bottom">
                    <div className="pizza-block__price">$2.60</div>
                    <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>Add</span>
                      <i>2</i>
                    </div>
                  </div>
                </div>
                <div className="pizza-block">
                  <img
                    className="pizza-block__image"
                    src="./img/orange.png"
                    alt="Pizza"
                  />
                  <h4 className="pizza-block__title">Crush Orange</h4>
                  <p> 2 L</p>
                  <div className="pizza-block__bottom">
                    <div className="pizza-block__price">$2.99</div>
                    <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>Add</span>
                      <i>2</i>
                    </div>
                  </div>
                </div>
                <div className="pizza-block">
                  <img
                    className="pizza-block__image"
                    src="./img/water.png"
                    alt="Pizza"
                  />
                  <h4 className="pizza-block__title">Water</h4>
                  <p>20 fl oz</p>

                  <div className="pizza-block__bottom">
                    <div className="pizza-block__price">$1.99</div>
                    <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>Add</span>
                      <i>2</i>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="content__title">Salads and Fries</h2>
              <div className="content__items">
                <div className="pizza-block">
                  <img
                    className="pizza-block__image"
                    src="./img/garden.png"
                    alt="Pizza"
                  />
                  <h4 className="pizza-block__title">Fresh Garden Salad </h4>

                  <div className="pizza-block__bottom">
                    <div className="pizza-block__price">$5.60</div>
                    <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>Add</span>
                      <i>2</i>
                    </div>
                  </div>
                </div>
                <div className="pizza-block">
                  <img
                    className="pizza-block__image"
                    src="./img/chickensalad.png"
                    alt="Pizza"
                  />
                  <h4 className="pizza-block__title">Chicken Salad</h4>

                  <div className="pizza-block__bottom">
                    <div className="pizza-block__price">$8.60</div>
                    <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>Add</span>
                      <i>2</i>
                    </div>
                  </div>
                </div>
                <div className="pizza-block">
                  <img
                    className="pizza-block__image"
                    src="./img/fries.png"
                    alt="Pizza"
                  />
                  <h4 className="pizza-block__title">Fries and Chicken box</h4>
                  <div className="pizza-block__selector">
                    <ul>
                      <p>
                        Lunch box with 8 boneless wings and oven-baked fries.
                        Served with ranch.
                      </p>
                    </ul>
                  </div>
                  <div className="pizza-block__bottom">
                    <div className="pizza-block__price">$8.99</div>
                    <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>Add</span>
                      <i>2</i>
                    </div>
                  </div>
                </div>
                <div className="pizza-block">
                  <img
                    className="pizza-block__image"
                    src="./img/wings.png"
                    alt="Pizza"
                  />
                  <h4 className="pizza-block__title">Fries and Wings box</h4>
                  <div className="pizza-block__selector">
                    <ul>
                      <p>
                        Lunch box with 4 wings and oven-baked fries. Served with
                        ranch.
                      </p>
                    </ul>
                  </div>
                  <div className="pizza-block__bottom">
                    <div className="pizza-block__price">$6.99</div>
                    <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>Add</span>
                      <i>2</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
