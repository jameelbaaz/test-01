import React, { useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { filterMaterial } from "../actions/filterAction";

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();
  // useSelector for selecting the Redux State
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  // Current Page State and Items on single page local State
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    // dispatch load data from the redux actions
    dispatch(listProducts());
  }, [dispatch]);

  // //Get Current Posts
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  const MatChangeHandler = (e) => {
    const mat = e.target.value;
    dispatch(filterMaterial(mat));
    history.push(`/products/${mat}`);
  };

  const unique = () => {
    let productMat = products.map((product) => product.material);
    const unique = [...new Set(productMat)];
    unique.unshift("Choose the material");
    return unique;
  };
  return (
    <>
      <h3>Latest Products</h3>
      <p>Material Used</p>
      <Form.Control as="select" onChange={MatChangeHandler}>
        {unique().map((mat, index) => (
          <option key={index} value={mat}>
            {mat}
          </option>
        ))}
      </Form.Control>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={6} md={3} lg={2} xlg={2}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
