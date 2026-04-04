local potato = require("potato")

function get_user_id(req)
    local userId, err = req.get_user_id()
    if err then
        req.json(401, {
            error = "Unauthorized"
        })
        return nil
    end
    return userId
end

function list_authors(ctx)
    local req = ctx.request()
    local userId = get_user_id(req)
    if userId == nil then return end


    req.json_array(200, {
        
    })
end



function on_http(ctx)
    local req = ctx.request()
    local path = ctx.param("subpath")
    local method = ctx.param("method")


    if path == "/author" and method == "GET" then
        return list_authors(ctx)
    end


    req.json(404, {
        message = "Not Found"
    })
end