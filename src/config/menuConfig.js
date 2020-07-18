import Index from "../view/index/index";
import PartyBuild from "../view/partyBuild/partyBuild";
import Technology from '../view/technology/technology';
import LabourUnion from "../view/labourUnion/labourUnion";
import YouthLeague from '../view/youthLeague/youthLeague';
import TeamBuild from '../view/teamBuild/teamBuild';
import VehicleManage from '../view/comprehensive/vehicleManage/vehicleManage';
import Comprehensive from "../view/comprehensive/comprehensive";
import DriverManage from '../view/comprehensive/driverManage/driverManage';
import BookStore from "../view/bookStore/bookStore";
import OilManage from '../view/comprehensive/oilManage/oilManage';
import Control from '../view/comprehensive/control/control';
import DocumentPublish from '../view/comprehensive/control/children/documentPublish';
import OpinionManage from '../view/comprehensive/control/children/opinionManage';
import ProjectManage from '../view/comprehensive/projectManage/projectManage';
import SpecialProject from '../view/comprehensive/projectManage/children/specialProject';
import RepairCost from '../view/comprehensive/projectManage/children/repairCost';
import RetailRepair from '../view/comprehensive/projectManage/children/retailRepair';
import SelfSupport from '../view/comprehensive/projectManage/children/selfSupport';
import LaborHealth from '../view/comprehensive/laborHealth/laborHealth';
import EmployeeStyle from '../view/employeeStyle/employeeStyle';
import Ctree from "../view/tree/tree"
const menuList = [
  { title: "门户首页", key: "/", component: Index },
  {
    title: "党建管理",
    key: "/partyBuild",
    component: PartyBuild,
  },
  {
    title: "工会工作",
    key: "/labourUnion",
    component: LabourUnion,
  },
  {
    title: "科技创新",
    key: "/technology",
    component: Technology,
  },
  {
    title: "团青工作",
    key: "/youthLeague",
    component: YouthLeague,
  },
  {
    title: "班组建设",
    key: "/teamBuild",
    component: TeamBuild,
  },
  // {
  //   title: "电子书屋",
  //   key: "/bookStore",
  //   component: BookStore,
  // },
  {
    title: "文档管理",
    key: "/comprehensive",
    component: Ctree,
    // children: [
    //   {
    //     title: "车辆管理",
    //     key: "/comprehensive/vehicleManage",
    //     component: VehicleManage
    //   },
    //   {
    //     title: "司驾人员管理",
    //     key: "/comprehensive/driverManage",
    //     component: DriverManage
    //   },
    //   {
    //     title: "车辆油耗管理",
    //     key: "/comprehensive/oilManage",
    //     component: OilManage
    //   },
    //   {
    //     title: "综合治理",
    //     key: "/comprehensive/control",
    //     component: Control,
    //     children2:[
    //       {
    //         title: "文件宣传",
    //         key: "/comprehensive/control/documentPublish",
    //         component: DocumentPublish
    //       },
    //       {
    //         title: "舆情管理",
    //         key: "/comprehensive/control/opinionManage",
    //         component: OpinionManage
    //       },
    //     ]
    //   },
    //   {
    //     title: "工程管理",
    //     key: "/comprehensive/projectManage",
    //     component: ProjectManage,
    //     children2:[
    //       {
    //         title: "专项工程管理",
    //         key: "/comprehensive/projectManage/specialProject",
    //         component: SpecialProject
    //       },
    //       {
    //         title: "修理费工程",
    //         key: "/comprehensive/projectManage/repairCost",
    //         component: RepairCost
    //       },
    //       {
    //         title: "零星维修工程",
    //         key: "/comprehensive/projectManage/retailRepair",
    //         component: RetailRepair
    //       },
    //       {
    //         title: "自营工程",
    //         key: "/comprehensive/projectManage/selfSupport",
    //         component: SelfSupport
    //       },
    //     ]
    //   },
    //   {
    //     title: "劳动保护与职业健康",
    //     key: "/comprehensive/laborHealth",
    //     component: LaborHealth
    //   }
    // ]
  },
  {
    title: "员工风采",
    key: "/employeeStyle",
    component: EmployeeStyle,
  },
  
];
export default menuList;
