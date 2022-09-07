import React from "react";
import ReactDom from "react-dom";
import "./styles.less";

import { GanttRoot } from "./GanttRoot";

const rootElement = document.getElementById("root");
ReactDom.render(<GanttRoot />, rootElement);
