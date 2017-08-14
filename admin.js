/* global core */

(function () {
    var perm = core.Permissions.Check("admin/modules", core.Session.User().Groups);
    if (perm[0] !== true) {
        exit(perm[1].Error());
    }
    // @TODO Код, необходимый для административной части модуля, если модулю админка не нужна, можно удалить этот файл 
    echo("");
})();