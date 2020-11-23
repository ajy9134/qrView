import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoResult from "../Routes/noResult";
import Result from "../Routes/Result";

type AppRouterProps ={
  po_id : any;
  isResult : boolean ;
}


const AppRouter = (isResult) => {
    return (
      <Router>
        <Switch>
          {isResult ? (
            <>
              <Route exact path="/:po_id">
                <Result />
              </Route>
            </>
          ) : (
            <Route exact path="/:po_id">
               <NoResult />
            </Route>
          )}
        </Switch>
      </Router>
    );
  };
  export default AppRouter;