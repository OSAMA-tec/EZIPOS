const checkPermission = (permission) => {
    return (req, res, next) => {
        const userRole = req.user.roleModel;
        if (!userRole || !userRole[permission]) {
            return res.status(403).json({ error: 'You do not have the necessary permissions' });
        }
        next();
    };
};

module.exports={checkPermission}