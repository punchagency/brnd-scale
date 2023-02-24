import React, {useState} from 'react'
import PageTitle from '../../components/PageTitle';
import ListIcon from '../../components/svgs/ListIcon';
import TabButton from '../../components/TabButton/TabButton';
import ExploreBrands from './ExploreBrands';
import ExplorePublishers from './ExplorePublishers';



const MarketPlace = ({ index }: any) => {
    
  const [tabIndex, setTabIndex] = useState<0 | 1 | 2>(index || 0);
  const getTable = () => {
    if (tabIndex === 0) {
      return <ExploreBrands />;
    } else {
      return <ExplorePublishers />;
    }
  };
  const getHeading = () => {
    if (tabIndex === 0) {
      return (
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon />{" "}
              <span className="fs-5 ms-2">
              Share your offers with brands
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon />{" "}
              <span className="fs-5 ms-2">
              Connect with Publishers
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3"><PageTitle
          title="Welcome to The Market place"
          subtitle="Find new brands and publishers"
        /></div>
      <div className="col-12 mt-4 d-flex">
        
        <TabButton
          text="Explore Brands"
          onClick={() => {
            setTabIndex(0);
          }}
          selected={tabIndex === 0}
        />
        <TabButton
          text="Explore Publishers"
          onClick={() => {
            setTabIndex(1);
          }}
          selected={tabIndex === 1}
        />
      </div>
      <div className="col-12 mt-4">{getHeading()}</div>
      {getTable()}
    </div>
  )
}

export default MarketPlace