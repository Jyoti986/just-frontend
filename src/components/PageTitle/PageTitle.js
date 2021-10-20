import React from "react";
import Helmet from "react-helmet";

const PageTitle = ({ title }) => {
  let defaultTitle = "Just - Post and Share";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
