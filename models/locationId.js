module.exports = function (sequelize, DataTypes) {
    var LocationId = sequelize.define("LocationId", {
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        secondaryId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        location_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        location_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        place_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        place_long: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                len: [1, 64]
            }
        },
        place_lat: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                len: [1, 64]
            }
        },
        family_friendly: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    LocationId.associate = function (models) {
        LocationId.belongsTo(models.OwnerId, {
            foreignKey: {
                onDelete: "cascade",
                allowNull: false
            }
        });
    };

    return LocationId;
};
