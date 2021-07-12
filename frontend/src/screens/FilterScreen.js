import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { filterMaterial } from "../actions/filterAction";

const FilterScreen = ({ match }) => {
  const filter = useSelector((state) => state.filter);
  const { loading, error, products } = filter;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterMaterial(match.params.mat));
  }, [dispatch, match]);

  return (
    <>
      <Button variant="light">
        <Link to="/">Go Back</Link>
      </Button>
      <h3>{match.params.mat} used</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xlg={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default FilterScreen;
