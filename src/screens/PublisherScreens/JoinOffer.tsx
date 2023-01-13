import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Layout from "../../containers/Layouts/Layout";
import Table from "../../components/Table";
import { Link, useLocation } from "react-router-dom";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import ReportsMenu from "../../components/Common/PageMenu";
import Badge from "../../components/Reports/Badge";
import WarningCircle from "../../components/svgs/WarningCircle";
import PageTitle from "../../components/PageTitle";
import PublisherOfferCard from "../../components/Cards/PublisherOfferCard";
import PageMenu from "../../components/Common/PageMenu";

import product from "../../assets/images/product.png";
import ShareIcon from "../../components/svgs/ShareIcon";
import CopyIcon from "../../components/svgs/CopyIcon";

const headers = [
    "Images",
    "Product Name",
    "Brands",
    "Category",
    "Prices",
    "Tags",
    "Commission Offer",
    "Active Coupons",
    "Conversion",
    "Total Orders",
    "Add Product",
];

const data = [
    {
        id: 1,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 2,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 3,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 4,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 5,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 6,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 7,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 8,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 9,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 10,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 11,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 12,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
    {
        id: 13,
        image: (
            <div className="d-flex justify-content-center">
                <img src={product} />
            </div>
        ),
        productName: <Link to="">Amazon Fire 7 Kids tablet, 7" display,
        ages 3-7, with ad-free content kids love
        </Link>,
        brands: "JBL Xtreme",
        category: "JBL Xtreme",
        prices: "$255.89",
        tags: "B099HP4D5Z",
        commissionOffer: <div>
            <span>12%</span>
            <span className="bg-info rounded p-1 ms-2 ps-2 pe-2" style={{ fontSize: '8px', height: '12px' }}>Pay per click</span>
        </div>,
        activeCoupons: "10 % off",
        conversion: 12,
        totalOrders: 2566,
        addProduct: (
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
            >
                Add to My Products
            </button>
        ),
    },
];

const displayLabels = [
    // "id",
    "image",
    "productName",
    "brands",
    "category",
    "prices",
    "tags",
    "commissionOffer",
    "activeCoupons",
    "conversion",
    "totalOrders",
    "addProduct",
];

function JoinOffer() {
    const [tableData, setTableData] = useState(data);
    const location = useLocation();

    const filterData = (searchString: any) => {
        if (!searchString) return tableData;
        return tableData.filter((item: any) => {
            return (
                item.productName.toLowerCase().includes(searchString.toLowerCase()) ||
                item.brand.toLowerCase().includes(searchString.toLowerCase()) ||
                item.startingDate.toLowerCase().includes(searchString.toLowerCase()) ||
                item.endingDate.toLowerCase().includes(searchString.toLowerCase()) ||
                item.tags.toLowerCase().includes(searchString.toLowerCase()) ||
                item.commissionMade
                    .toLowerCase()
                    .includes(searchString.toLowerCase()) ||
                item.totalSale.toLowerCase().includes(searchString.toLowerCase())
            );
        });
    };
    const deleteRow = (id: number) => {
        setTableData((prev: any) => {
            return prev.filter((row: any) => row.id != id);
        });
    };

    const addRow = (row: any) => {
        setTableData((prev: any) => {
            return [...prev, { id: prev.length, ...row }];
        });
    };

    const editData = (data: any) => {
        // setTableData(prev=>{return prev.map()})
    };
    return (
        <div className="row pt-3 ps-2 pe-5">
            <div className="col-12 mt-3">
                <PageTitle
                    title="Welcome to my offers"
                    subtitle="Track your Current products"
                />
            </div>
            <div className="col-12 mt-4 d-flex">
                <PageMenu
                    links={[
                        { path: "/publisher/offers", title: "Overview" },
                        { path: "/publisher/active-brands", title: "Active Brands" },
                        { path: "/publisher/active-products", title: "Active Products" },
                    ]}
                />
            </div>
            <div className="col-12 mt-4">
                <div className="card d-flex p-2">
                    <div className="row">
                        <div className="col-6 d-inline d-flex align-items-center ">
                            <ListIcon />{" "}
                            <span className="fs-5 ms-2">
                                List of All the (active products)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                
                <Table
                    tableData={tableData}
                    displayLabels={displayLabels}
                    headers={headers}
                    tableWidth={"135%"}
                    deleteRow={deleteRow}
                    editData={editData}
                    addRow={addRow}
                    filterData={filterData}
                />
            </div>
        </div>
    );
}

export default JoinOffer;
