var req = __request
var res = __response

function main() {
    let data
    try {
        data = JSON.parse(req.body())
    } catch (e) {
        res.json({
            ok: false,
            msg: "body错误"
        })
        return
    }
    if (!new RegExp("pt_key=[^;]+;pt_pin=[^;]+;").test(data.ck)) {
        res.json({
            ok: false,
            msg: "ck格式不正确"
        })
        return
    }
    let r = sillyGirl.session(data.ck)
    res.json({
        ok: true,
        msg: r().message
    })
}

main()