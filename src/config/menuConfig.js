import Index from "../view/index/index";
import PartyBuild from "../view/partyBuild/partyBuild";
import PBsubmenu1 from "../view/partyBuild/submenu1/submenu1";
import PBsubmenu2 from "../view/partyBuild/submenu2/submenu2";
import LabourUnion from "../view/labourUnion/labourUnion";
import Comprehensive from "../view/comprehensive/comprehensive";
import Train from "../view/train/train";
import BookStore from "../view/bookStore/bookStore";
const menuList = [
  { title: "首页", key: "/", component: Index },
  {
    title: "党建",
    key: "/partyBuild",
    component: PartyBuild,
    children: [
      {
        title: "党建子菜单一",
        key: "/partyBuild/submenu1",
        component: PBsubmenu1
      },
      {
        title: "党建子菜单二",
        key: "/partyBuild/submenu2",
        component: PBsubmenu2
      }
    ]
  },
  {
    title: "工会",
    key: "/labourUnion",
    component: LabourUnion,
  },
  {
    title: "综合",
    key: "/comprehensive",
    component: Comprehensive,
  },
  {
    title: "培训",
    key: "/train",
    component: Train,
  },
  {
    title: "电子书屋",
    key: "/bookStore",
    component: BookStore,
  },
];
export default menuList;
