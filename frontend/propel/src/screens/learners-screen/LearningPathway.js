import React, { useState, useEffect } from "react";
import classes from "./LearnersPathway.module.css";
import { useDispatch, useSelector } from "react-redux";
import PathWay from "../../features/popel-admin/learnerspathway/PathWay";
import BackendService from "../../service/BackendService";
import CreatePathway from "../../features/popel-admin/learnerspathway/CreatePathway";
import { propelAdminSliceActions } from "../../features/popel-admin/PropelAdminSlice";
import EditPathway from "../../features/popel-admin/learnerspathway/EditPathway";

const LearningPathway = () => {
  const [pathways, setPathways] = useState();

  const dispatch = useDispatch();
  const retrivePathways = () => {
    console.log("enetrrs");
    BackendService.getAllPathways().then((res) => {
      setPathways(res?.data?.data?.pathways);
    });
  };
  const openCreatePathwayModal = () => {
    dispatch(
      propelAdminSliceActions.handleCreatePathwayModal({
        modal: true,
      })
    );
  };

  useEffect(() => {
    retrivePathways();
  }, []);

  const data = [
    {
      name: "Java",
      descrption: "descrption1",
      courses: 6,
    },
    {
      name: "Python",
      descrption: "descrption1",
      courses: 6,
    },
    {
      name: "Java Script",
      descrption: "descrption1",
      courses: 6,
    },
    {
      name: "Html",
      descrption: "descrption1",
      courses: 6,
    },
  ];
  return (
    <div>
      <div className={classes.parentContainer}>
        <div className={classes.pathWayContainer}>
          <div className={classes.searchContainer}>
            <input
              placeholder="Search Pathway"
              className={classes.searchPathway}
              type="text"
            />
            <button onClick={openCreatePathwayModal} className={classes.btn}>
              Create Pathway
            </button>
          </div>
          <div>
            <PathWay pathway={pathways} />
          </div>
          <CreatePathway />
          <EditPathway />
        </div>
      </div>
    </div>
  );
};

export default LearningPathway;
