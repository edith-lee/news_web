import React from "react";
import { MODULE_LIST, ARTICLE_LIST } from "../../constants/constants";
import { HttpGet } from "../../server/get";
import { Tabs, Row, Col } from 'antd'
const { TabPane } = Tabs;
export default class PartyBuild extends React.Component {
  state = {
    tabs: [{
      createby: "1",
      createon: "2019-12-15 12:51:20",
      fumkbs: "",
      fumkbsMc: "",
      id: 3,
      leixbs: 1,
      leixbsMc: "党建管理",
      mokmc: "十八大",
      updateby: "",
      updateon: "",
      zhuangt: ""
    },
    {
      createby: "1",
      createon: "2019-12-15 12:51:20",
      fumkbs: "",
      fumkbsMc: "",
      id: 4,
      leixbs: 1,
      leixbsMc: "党建管理",
      mokmc: "十九大",
      updateby: "",
      updateon: "",
      zhuangt: ""
    },
    {
      createby: "1",
      createon: "2019-12-15 12:51:20",
      fumkbs: "",
      fumkbsMc: "",
      id: 9,
      leixbs: 1,
      leixbsMc: "党建管理",
      mokmc: "十七大",
      updateby: "",
      updateon: "",
      zhuangt: ""
    }],
    list: [

    ]
  };
  componentDidMount = () => {
    HttpGet(MODULE_LIST, { leixbs: 1 })
      .then(res => {
        console.log(res);
        if (res.success) {
          this.setState({
            tabs: res.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  renderArticleList = (module) => {
    let list = []
    let fileList = [
      {
        createby: "1",
        createon: "2020-01-12 09:58:11",
        fabsj: "2020-01-12 09:58:11",
        fuj: "",
        id: 1,
        laiy: "内网",
        mokbs: 4,
        mokbsMc: "十九大",
        neir: "& lt;div& gt;每天3分钟，速览全国法治新闻& lt;/div& gt;& lt;p& gt;& lt;span& gt;1月12日星期日，农历十二月十八& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;封面新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/631.jpg\" height=\"422\" width=\"983\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2020年征兵开始！首次实施一年两征 10日，全国征兵网征兵报名通道正式开启，今年首次实行一年两次征兵。上半年应征报名时间为1月10日至2月15日，下半年男兵应征报名时间为4月1日至8月15日，女兵为6月26日至8月15日。（央视新闻客户端）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;高层动态& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、李克强：10日致电佩德罗·桑切斯，祝贺他连任西班牙王国首相。李克强表示，中国政府高度重视加强同西班牙的关系，愿进一步密切政策沟通和发展战略对接，深化互利合作。（央视新闻）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;硬新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、中共中央台办、国务院台办：11日，发言人表示，我们坚持“和平统一、一国两制”基本方针，坚持一个中国原则，坚决维护国家主权和领土完整，坚决反对任何形式的“台独”分裂图谋和行径，坚决增进台湾同胞利益福祉。（新华社）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、国家卫健委：武汉不明原因的病毒性肺炎疫情受到各界广泛关注，为维护全球卫生安全，中国将与世界卫生组织分享武汉不明原因的病毒性肺炎病例中检测到的新型冠状病毒基因序列信息。（国家卫健委网站）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;3、国家医保局：10日，召开全国医疗保障工作会议，会议强调，要大力推进国家组织药品集中采购和使用改革，推动“三医联动”改革，长抓不懈严厉打击欺诈骗保。（中国新闻网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;4、应急管理部：日前，公布了应急救援和生产安全事故各十大典型案例。其中生产安全事故典型案例包括：江苏响水“3·21”特别重大爆炸事故、江苏无锡“9·28”特别重大道路交通事故、湖南浏阳烟花公司“12·4”重大爆炸事故等。（应急管理部网站）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;5、工信部：11日，工信部部长苗圩在中国电动汽车百人会高层论坛表示，今年的新能源汽车补贴政策将保持相对稳定，不会大幅退坡。（中国新闻网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;6、交通运输部：11日发布消息，1月10日春运第一天，全国铁路、道路、水路、民航共发送旅客6960.9万人次，比去年同期增长3.0%。（法制网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;7、西藏首次立法保障民族团结 11日，西藏自治区第十一届人民代表大会第三次会议表决通过《西藏自治区民族团结进步模范区创建条例》。此条例将自2020年5月1日起施行。（中国新闻网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;8、中国天眼正式开放运行 11日，被誉为“中国天眼”的500米口径球面射电望远镜通过国家验收正式开放运行，成全球最大最灵敏射电望远镜。从2017年10月起，“中国天眼”两年多来发现102脉冲星，超过同期欧美多个脉冲星搜索团队发现数量的总和。（新华社）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/640.jpg\" height=\"473\" width=\"743\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;9、我国学者发现恶性脑瘤的药物新疗法 近期，中国科学院合肥肿瘤医院方志友、陈学冉科研团队筛选并实验发现，药物“金转停”可控制胶质瘤发展，有望成为临床治疗胶质瘤的新手段。（新华社）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;微新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、国家开发银行原董事长胡怀邦被开除党籍 11日，中央纪委国家监委发布通报表示，胡怀邦是党的十八大后不收敛不收手，政治问题和经济问题相交织的腐败典型，性质严重，影响恶劣，应予严肃处理。（@人民日报）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/642.jpg\" height=\"479\" width=\"720\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、成都双流区法院执行局副局长殴打医生，已被行政拘留 四川成都市公安局青羊区分局11日发布警方通报称，1月10日该分局辖区内四川省人民医院发生打人事件，目前打人者已被行政拘留并罚款。（@平安青羊）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/643.jpg\" height=\"414\" width=\"879\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;3、广州地铁塌陷失联人员已全部找到，均已遇难 11日，广东广州市政府通报了广州地铁塌陷事故的最新进展，从2019年12月1日事故发生后，广州各部门全力开展搜救，3名失联人员全部被找到，不过均已遇难。（@央视新闻）。& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/644.jpg\" height=\"425\" width=\"655\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;4、专治老赖！全国首个电子封条来了 近日，湖南长沙芙蓉法院启用“电子封条”查处一处涉案房产。“电子封条”可24小时不间断监控和取证。当有人试图破坏时，设备会立即播放警告语音，并拍照传至执行法官手机上。（@人民日报）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/645.jpg\" height=\"412\" width=\"783\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;5、蔡英文当选连任台湾地区领导人 台湾地区领导人选举11日举行投票，得票第二的中国国民党候选人韩国瑜于晚间承认败选，这意味着得票第一的民进党候选人蔡英文当选连任台湾地区领导人。（新华网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;囧新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、男子90分钟报警38次被拘留 辽宁沈阳男子韦某与小区保安起冲突报警，民警处理完后，韦某在一个半小时内又连续拨打110报警38次，被传唤至派出所询问。韦某称，觉得110接线员声音好听，态度好，就打上瘾了。韦某被拘留5日。（@人民网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/647.jpg\" height=\"190\" width=\"210\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、两男子在牢里成为朋友，出狱后来了场“盗窃比武” 近日，黑龙江鸡东两名男子在监狱服刑期间成为好友，出狱后决定“捞一把”进行盗窃比武，先后盗窃偷走一部手机、三件貂皮大衣和一条香烟。最后二人被民警抓获。（@看看新闻Knews）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/648.jpg\" height=\"189\" width=\"166\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;3、女子遇心仪男生报警：能帮我调监控找到他吗？近日，广西南宁一名女孩打110报警称，称自己在坐公交车时，遇到了一个自己喜欢的男孩，打报警电话只为想让警方调一下监控，查一下男孩在哪一站下的车，此要求被警方拒绝。（@人民网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/649.gif\" height=\"233\" width=\"233\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;暖新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、4分钟跑完15分钟的“救命路”，你累瘫的样子真帅！日前，安徽亳州交警薛堃接到一男子求助：孩子突发疾病急需就医。薛堃驾驶警车将孩子送到医院，后又抱着孩子冲上楼梯，直到把孩子送到医护人员手中才松了口气。而他则累到倚着墙角瘫坐在地上。（@亳州公安）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/651.jpg\" height=\"353\" width=\"628\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、期末考试遇大雪封路老师徒步近15公里送试卷 日前，山西昔阳县普降大雪，西寨学校通往昔阳县的道路被大雪封住，车辆无法通行，为了孩子们能如期进行期末考试，老师们在交通受阻的情况下，肩扛40斤试题，手执木杖，徒步往返近30里的盘山雪岭路送试卷。（@梨视频）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/653.jpg\" height=\"669\" width=\"618\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;洋新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、伊朗承认“非故意”击落乌克兰客机 11日伊朗军方承认因“人为错误”击落客机。伊朗总统鲁哈尼表示将继续对此事展开调查并追责。伊朗外长称，美国的“冒险行动”是导致此次伊朗出现“人为错误”的原因。（央视新闻）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、美国称不会和伊拉克讨论撤军问题 10日美国国务院发表声明，拒绝伊拉克方面的撤军要求，称美军在伊拉克的存在是长期性的。此前，伊拉克看守政府总理致电美国，要求美方派遣代表团到伊拉克，商讨撤军方案。（新华社）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;3、俄土商定在叙伊德利卜实施停火 10日，土耳其国防部发布声明称，土耳其和俄罗斯已经同意从叙利亚当地时间12日凌晨起，在叙利亚伊德利卜“冲突降级区”实施停火。停火是为了防止新的难民潮，确保当地民众生活恢复正常。（央视新闻）& lt;/span& gt;& lt;/p& gt;",
        updateby: "",
        updateon: "",
        wenzbt: "测试党建工作",
        zhuangt: 1,
        zuoz: "test"
      },
      {
        createby: "1",
        createon: "2020-01-12 09:58:11",
        fabsj: "2020-01-12 09:58:11",
        fuj: "",
        id: 2,
        laiy: "内网",
        mokbs: 3,
        mokbsMc: "十八大",
        neir: "& lt;div& gt;每天3分钟，速览全国法治新闻& lt;/div& gt;& lt;p& gt;& lt;span& gt;1月12日星期日，农历十二月十八& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;封面新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/631.jpg\" height=\"422\" width=\"983\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2020年征兵开始！首次实施一年两征 10日，全国征兵网征兵报名通道正式开启，今年首次实行一年两次征兵。上半年应征报名时间为1月10日至2月15日，下半年男兵应征报名时间为4月1日至8月15日，女兵为6月26日至8月15日。（央视新闻客户端）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;高层动态& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、李克强：10日致电佩德罗·桑切斯，祝贺他连任西班牙王国首相。李克强表示，中国政府高度重视加强同西班牙的关系，愿进一步密切政策沟通和发展战略对接，深化互利合作。（央视新闻）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;硬新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、中共中央台办、国务院台办：11日，发言人表示，我们坚持“和平统一、一国两制”基本方针，坚持一个中国原则，坚决维护国家主权和领土完整，坚决反对任何形式的“台独”分裂图谋和行径，坚决增进台湾同胞利益福祉。（新华社）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、国家卫健委：武汉不明原因的病毒性肺炎疫情受到各界广泛关注，为维护全球卫生安全，中国将与世界卫生组织分享武汉不明原因的病毒性肺炎病例中检测到的新型冠状病毒基因序列信息。（国家卫健委网站）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;3、国家医保局：10日，召开全国医疗保障工作会议，会议强调，要大力推进国家组织药品集中采购和使用改革，推动“三医联动”改革，长抓不懈严厉打击欺诈骗保。（中国新闻网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;4、应急管理部：日前，公布了应急救援和生产安全事故各十大典型案例。其中生产安全事故典型案例包括：江苏响水“3·21”特别重大爆炸事故、江苏无锡“9·28”特别重大道路交通事故、湖南浏阳烟花公司“12·4”重大爆炸事故等。（应急管理部网站）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;5、工信部：11日，工信部部长苗圩在中国电动汽车百人会高层论坛表示，今年的新能源汽车补贴政策将保持相对稳定，不会大幅退坡。（中国新闻网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;6、交通运输部：11日发布消息，1月10日春运第一天，全国铁路、道路、水路、民航共发送旅客6960.9万人次，比去年同期增长3.0%。（法制网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;7、西藏首次立法保障民族团结 11日，西藏自治区第十一届人民代表大会第三次会议表决通过《西藏自治区民族团结进步模范区创建条例》。此条例将自2020年5月1日起施行。（中国新闻网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;8、中国天眼正式开放运行 11日，被誉为“中国天眼”的500米口径球面射电望远镜通过国家验收正式开放运行，成全球最大最灵敏射电望远镜。从2017年10月起，“中国天眼”两年多来发现102脉冲星，超过同期欧美多个脉冲星搜索团队发现数量的总和。（新华社）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/640.jpg\" height=\"473\" width=\"743\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;9、我国学者发现恶性脑瘤的药物新疗法 近期，中国科学院合肥肿瘤医院方志友、陈学冉科研团队筛选并实验发现，药物“金转停”可控制胶质瘤发展，有望成为临床治疗胶质瘤的新手段。（新华社）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;微新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、国家开发银行原董事长胡怀邦被开除党籍 11日，中央纪委国家监委发布通报表示，胡怀邦是党的十八大后不收敛不收手，政治问题和经济问题相交织的腐败典型，性质严重，影响恶劣，应予严肃处理。（@人民日报）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/642.jpg\" height=\"479\" width=\"720\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、成都双流区法院执行局副局长殴打医生，已被行政拘留 四川成都市公安局青羊区分局11日发布警方通报称，1月10日该分局辖区内四川省人民医院发生打人事件，目前打人者已被行政拘留并罚款。（@平安青羊）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/643.jpg\" height=\"414\" width=\"879\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;3、广州地铁塌陷失联人员已全部找到，均已遇难 11日，广东广州市政府通报了广州地铁塌陷事故的最新进展，从2019年12月1日事故发生后，广州各部门全力开展搜救，3名失联人员全部被找到，不过均已遇难。（@央视新闻）。& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/644.jpg\" height=\"425\" width=\"655\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;4、专治老赖！全国首个电子封条来了 近日，湖南长沙芙蓉法院启用“电子封条”查处一处涉案房产。“电子封条”可24小时不间断监控和取证。当有人试图破坏时，设备会立即播放警告语音，并拍照传至执行法官手机上。（@人民日报）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/645.jpg\" height=\"412\" width=\"783\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;5、蔡英文当选连任台湾地区领导人 台湾地区领导人选举11日举行投票，得票第二的中国国民党候选人韩国瑜于晚间承认败选，这意味着得票第一的民进党候选人蔡英文当选连任台湾地区领导人。（新华网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;囧新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、男子90分钟报警38次被拘留 辽宁沈阳男子韦某与小区保安起冲突报警，民警处理完后，韦某在一个半小时内又连续拨打110报警38次，被传唤至派出所询问。韦某称，觉得110接线员声音好听，态度好，就打上瘾了。韦某被拘留5日。（@人民网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/647.jpg\" height=\"190\" width=\"210\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、两男子在牢里成为朋友，出狱后来了场“盗窃比武” 近日，黑龙江鸡东两名男子在监狱服刑期间成为好友，出狱后决定“捞一把”进行盗窃比武，先后盗窃偷走一部手机、三件貂皮大衣和一条香烟。最后二人被民警抓获。（@看看新闻Knews）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/648.jpg\" height=\"189\" width=\"166\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;3、女子遇心仪男生报警：能帮我调监控找到他吗？近日，广西南宁一名女孩打110报警称，称自己在坐公交车时，遇到了一个自己喜欢的男孩，打报警电话只为想让警方调一下监控，查一下男孩在哪一站下的车，此要求被警方拒绝。（@人民网）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/649.gif\" height=\"233\" width=\"233\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;暖新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、4分钟跑完15分钟的“救命路”，你累瘫的样子真帅！日前，安徽亳州交警薛堃接到一男子求助：孩子突发疾病急需就医。薛堃驾驶警车将孩子送到医院，后又抱着孩子冲上楼梯，直到把孩子送到医护人员手中才松了口气。而他则累到倚着墙角瘫坐在地上。（@亳州公安）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/651.jpg\" height=\"353\" width=\"628\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、期末考试遇大雪封路老师徒步近15公里送试卷 日前，山西昔阳县普降大雪，西寨学校通往昔阳县的道路被大雪封住，车辆无法通行，为了孩子们能如期进行期末考试，老师们在交通受阻的情况下，肩扛40斤试题，手执木杖，徒步往返近30里的盘山雪岭路送试卷。（@梨视频）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;div style=\"text-align: center;\"& gt;& lt;img src=\"http://image.thepaper.cn/www/image/45/239/653.jpg\" height=\"669\" width=\"618\" alt=\"\"& gt;& lt;/div& gt;& lt;p& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;洋新闻& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;1、伊朗承认“非故意”击落乌克兰客机 11日伊朗军方承认因“人为错误”击落客机。伊朗总统鲁哈尼表示将继续对此事展开调查并追责。伊朗外长称，美国的“冒险行动”是导致此次伊朗出现“人为错误”的原因。（央视新闻）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;2、美国称不会和伊拉克讨论撤军问题 10日美国国务院发表声明，拒绝伊拉克方面的撤军要求，称美军在伊拉克的存在是长期性的。此前，伊拉克看守政府总理致电美国，要求美方派遣代表团到伊拉克，商讨撤军方案。（新华社）& lt;/span& gt;& lt;br& gt;& lt;/p& gt;& lt;div class=\"contheight\"& gt;& lt;/div& gt;& lt;p& gt;& lt;span& gt;3、俄土商定在叙伊德利卜实施停火 10日，土耳其国防部发布声明称，土耳其和俄罗斯已经同意从叙利亚当地时间12日凌晨起，在叙利亚伊德利卜“冲突降级区”实施停火。停火是为了防止新的难民潮，确保当地民众生活恢复正常。（央视新闻）& lt;/span& gt;& lt;/p& gt;",
        updateby: "",
        updateon: "",
        wenzbt: "测试党建工作",
        zhuangt: 1,
        zuoz: "test"
      }
    ]
    // HttpGet(ARTICLE_LIST, { leixbs: module.id })
    //   .then(res => {
    //     console.log(res);
    //     if (res.success) {
    //       res.data.map(item => {
    //         list.push(
    //           <div key={item.id} className='articleListItem'>
    //             <a><span style={{ padding: '0px 10px' }}>●</span>{item.wenzbt}</a>
    //             <div>{item.createon}</div>
    //           </div>
    //         )
    //       })
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    fileList.map(item => {
      list.push(
        <Col key={item.id} className='articleListItem' span={11} onClick={()=>{this.props.history.push(`/article/${item.id}`)}}>
          <div className='time'>
            <div className='date'>
              {item.fabsj ? item.fabsj.slice(8, 10) : ''}
            </div>
            <div className='year'>
              {item.fabsj ? item.fabsj.slice(0, 7) : ''}
            </div>
          </div>
          <div className='detail'>
            <div className='title'>
              {item.wenzbt}
            </div>
            <div className='cont'  dangerouslySetInnerHTML={{ __html: item.neir}}>
            </div>
          </div>

        </Col>
      )
    })
    return list
  }
  render() {
    return <div className='contentWrap2'>
      <Tabs defaultActiveKey={0}>
        {this.state.tabs.map((item, index) => {
          return <TabPane tab={item.mokmc} key={index}>
            <Row >
              {this.renderArticleList(item)}
            </Row>
          </TabPane>
        })}
      </Tabs></div>;
  }
}
