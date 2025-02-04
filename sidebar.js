/**
 * 在这个文件储存自定义的侧边栏结构
 * https://ecosystem.vuejs.press/zh/themes/default/config.html#sidebar
 */
const customSidebar = [
    ["/", "简介"],
    ["/rules", "玩家协议/服务器规则"],
    {
        title: "🔆 初来乍到",
        collapsible: true,
        children: [
            "/basic/premium",
            "/basic/qqbind",
            "/basic/commands",
            "/basic/skin",
            "/basic/res",
            "/basic/faq",
        ]
    },
    {
        title: "🕹 游戏内容",
        collapsible: true,
        children: [
            "/play/map",
            "/play/farm",
            "/play/query",
            "/play/shop",
            "/play/lock"
        ]
    },
    ["/markdown", "Markdown 方言"],
    ["/contributing", "贡献文档"],
]

export default customSidebar
