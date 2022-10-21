import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = (props) => {
  let name = props.name;
  return (
    <div class="card-group">
      <div class="card text-center">
        <img
          src="https://image.shutterstock.com/image-illustration/beach-living-on-sea-view-600w-416261833.jpg"
          class="card-img-top"
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
        <div class="card-footer text-center">
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>{" "}
        </div>
      </div>
      <div class="card text-center">
        <img
          src="https://image.shutterstock.com/image-illustration/beach-living-on-sea-view-600w-416261833.jpg"
          class="card-img-top"
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
        <div class="card-footer text-center">
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>{" "}
        </div>
      </div>
      <div class="card text-center">
        <img
          src="https://image.shutterstock.com/image-illustration/beach-living-on-sea-view-600w-416261833.jpg"
          class="card-img-top"
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
        <div class="card-footer text-center">
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>{" "}
        </div>
      </div>
      <div class="card text-center">
        <img
          src="https://image.shutterstock.com/image-illustration/beach-living-on-sea-view-600w-416261833.jpg"
          class="card-img-top"
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
        <div class="card-footer text-center">
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
