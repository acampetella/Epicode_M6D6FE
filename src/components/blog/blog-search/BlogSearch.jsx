import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { blogSearchTerm, blogSearchSetTerm } from "../../../reducers/blogSearchReducer";
import { getPostsList } from "../../../reducers/blogListReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const BlogSearch = () => {
    const dispatch = useDispatch();
    const term = useSelector(blogSearchTerm);

    const search = (event) => {
      event.preventDefault();
      if (term !== '') {
        dispatch(getPostsList([1, term]));
      }
    };

    useEffect(()=> {
      if (term === '') {
        dispatch(getPostsList([1, term]));
      }
    }, [dispatch, term]);

  return (
    <Form className="d-flex mb-3">
      <Form.Group className="mb-3 me-2 w-25" controlId="formBasicText">
        <Form.Control 
            type="text" 
            placeholder="Enter search key"
            onChange={(event) => dispatch(blogSearchSetTerm(event.target.value))}
            value={term}
            className="fs-4"
        />
      </Form.Group>
      <Button 
        variant="primary" 
        type="submit" 
        className="mb-3"
        onClick={search}
      >
        Search
      </Button>
    </Form>
  );
};

export default BlogSearch;
