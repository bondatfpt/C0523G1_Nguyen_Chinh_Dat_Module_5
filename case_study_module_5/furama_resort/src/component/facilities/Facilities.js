import React from "react";
import { Link } from "react-router-dom";
import "./Facilities.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Facilities () {
  const [villaList, setVillaList] = useState([]);
  const [houseList, setHouseList] = useState([]);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get("http://localhost:3001/villas");
        const response2 = await axios.get("http://localhost:3001/houses");
        const response3 = await axios.get("http://localhost:3001/rooms");
        setVillaList(response1.data);
        setHouseList(response2.data);
        setRoomList(response3.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <>
        <div className="back_re">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h2>Facilities</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our_room">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Our Villa</h2>
                  <h3>
                    <Link to="/villa/new" className="highlight-link">
                      Add a new villa
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              {villaList.map((villa) => {
                return (
                  <div className="col-md-4 col-sm-6" key={villa.id}>
                    <div id="serv_hover" className="room">
                      <div className="room_img">
                        <figure>
                          <img
                            src={villa.pathImg}
                            style={{ height: 224 }}
                            alt="#"
                          />
                        </figure>
                      </div>
                      <div className="bed_room">
                        <h3>{villa.name}</h3>
                        <div className="row">
                          <div className="col-md-6">
                            Area: {villa.usableArea}m²
                            Capacity: {villa.numberPeople}
                          </div>
                          <div className="col-md-6">
                            Cost: {villa.rentalCost}$ <br/>
                            Room: {villa.roomStandard}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md 6">
                            <div className="row">
                              <div className="col-md-6 btn-edit-delete">
                                <Link to= "/villa/update/" className="Btn-edit">
                                  Edit
                                  <svg className="svg" viewBox="0 0 512 512">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                                  </svg>
                                </Link>
                              </div>
                              <div className="col-md-6 btn-edit-delete">
                                <button className="Btn-delete">
                                  Delete
                                  <svg
                                    className="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 64 64"
                                  >
                                    <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* end our_villa */}
        {/* our_house */}
        <div className="our_room">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Our House</h2>
                  <h3>
                    <Link className="highlight-link" to="/house/new">
                      Add a new house
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              {houseList.map((house) => {
                return (
                  <div className="col-md-4 col-sm-6" key={house.id}>
                    <div id="serv_hover" className="room">
                      <div className="room_img">
                        <figure>
                          <img
                            src={house.pathImg}
                            style={{ height: 224 }}
                            alt="#"
                          />
                        </figure>
                      </div>
                      <div className="bed_room">
                        <h3>{house.name}</h3>
                        <p>
                          If you are going to use a passage of Lorem Ipsum, you
                          need to be sure there{" "}
                        </p>
                        <div className="row">
                          <div className="col-md 6">
                            <div className="row">
                              <div className="col-md-6 btn-edit-delete">
                                <Link to ="/house/update/" className="Btn-edit">
                                  Edit
                                  <svg className="svg" viewBox="0 0 512 512">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                                  </svg>
                                </Link>
                              </div>
                              <div className="col-md-6 btn-edit-delete">
                                <button className="Btn-delete">
                                  Delete
                                  <svg
                                    className="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 64 64"
                                  >
                                    <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* end our_house */}
        {/* our_room */}
        <div className="our_room">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Our Room</h2>
                  <h3>
                    <Link className="highlight-link" to="/room/new">
                      Add a new room
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              {roomList.map((room) => {
                return (
                  <div className="col-md-4 col-sm-6" key={room.id}>
                    <div id="serv_hover" className="room">
                      <div className="room_img">
                        <figure>
                          <img
                            src={room.pathImg}
                            style={{ height: 224 }}
                            alt="#"
                          />
                        </figure>
                      </div>
                      <div className="bed_room">
                        <h3>{room.name}</h3>
                        <p>
                          If you are going to use a passage of Lorem Ipsum, you
                          need to be sure there{" "}
                        </p>
                        <div className="row">
                          <div className="col-md 6">
                            <div className="row">
                              <div className="col-md-6 btn-edit-delete">
                                <Link to="/room/update/" className="Btn-edit">
                                  Edit
                                  <svg className="svg" viewBox="0 0 512 512">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                                  </svg>
                                </Link>
                              </div>
                              <div className="col-md-6 btn-edit-delete">
                                <button className="Btn-delete">
                                  Delete
                                  <svg
                                    className="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 64 64"
                                  >
                                    <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <>
        </>
      </>
    </div>
  );
}
