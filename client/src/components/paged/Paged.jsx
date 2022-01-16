import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import {
  getProducts,
  getProductsByName,
} from "../../redux/reducers/products/actions";

const Paged = () => {
  const dispatch = useDispatch();
  const { pageCount, page } = useSelector((state) => state.products.paged);
  const nameProduct = useSelector((state) => state.forms.nameProduct);
  const whatRenderShop = useSelector((state) => state.flags.whatRenderShop);
  const handlePagedClick = ({ selected }) => {
    if (whatRenderShop === "name") {
      dispatch(getProductsByName(selected, nameProduct));
    } else if (whatRenderShop === "all") {
      dispatch(getProducts());
    }
  };
  return (
    <ReactPaginate
      previousLabel={<FaAngleDoubleLeft />}
      nextLabel={<FaAngleDoubleRight />}
      breakLabel="..."
      pageCount={pageCount ? pageCount : 0}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePagedClick}
      containerClassName="paged"
      pageLinkClassName="page-item-link"
      previousClassName="paged-item"
      nextClassName="paged-item"
      breakClassName="paged-item"
      forcePage={page ? parseInt(page) : -1}
      activeClassName="pageActive"
    />
  );
};

export default Paged;
