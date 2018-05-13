module.exports ={                   // Target
    options: {                       // Target options
        style: 'expanded'
    },
    bootstrap: {
        files: {                         // Dictionary of files
            '<%= src.styles %>temp/bootstrap.scss': '<%= src.styles %>config/bootstrap.scss',      // 'destination': 'source'
        }
    },
    modules: {
        files: {                         // Dictionary of files
            '<%= src.styles %>temp/modules.scss': '<%= src.styles %>config/modules.scss',      // 'destination': 'source'
        }
    },
    vendor: {
        files: {                         // Dictionary of files
            '<%= src.styles %>temp/vendor.scss': '<%= src.styles %>config/vendor.scss',      // 'destination': 'source'
        }
    },
    all: {
        files: {                         // Dictionary of files
            '<%= build.styles %>styles.css': '<%= src.styles %>config/all.scss',      // 'destination': 'source'
        }
    }
};