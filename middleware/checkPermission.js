const checkPermission = (permission) => {
    return (req, res, next) => {
        if (req.user.role === 'Admin') {
            return next();
        }

        const userRole = req.user.roleModel;
        if (!userRole || !userRole[permission]) {
            return res.status(403).json({ error: 'You do not have the necessary permissions' });
        }
        next();
    };
};

module.exports={checkPermission}