// noinspection JSUnusedGlobalSymbols
/**
 * @Description 简体中文语言包
 * @author erduotong
 */
export default {
    //title类请在此处翻译
    title: {
        basic: "基本设置",
        control_the_following_into_imported_modules: "控制导入模块",
        compiler_settings: "编译器设置",
        binary_version_information: "输出exe的信息",
    },
    //basic 基本设置
    main: {
        name: "主程序路径",
        desc: "如果只指定一次(如--main=\"1.py\")，这将取代位置参数，也就是要编译的文件名(入口)。\n" + "如果指定多次(如--main=\"1.py\" --main=\"2.py\"), 它将启用\"multidist\",它允许您创建依赖于文件名或调用名的二进制文件。\n" + "(允许多个主程序使用同一套编译参数)\n",
    },
    standalone: {
        name: "独立模式",
        desc: "启用独立模式进行输出。这允许你将二进制文件传输到其他机器, 而无需使用已有的Python环境。这也意味着它将变得很大\n它将启用这些选项: \"--follow-imports\" 和 \"--python-flag=no_site\"。",
    },
    onefile: {
        name: "单文件模式",
        desc: "在独立模式的基础上, 启用单文件模式。这意味着不是一个文件夹, 而是创建和使用一个压缩的可执行文件。",
    },
    output_filename: {
        name: "输出文件名",
        desc: "指定可执行文件的名称。拓展模块和独立模式没有这个选项，使用时会报错。这可能需要包含存在的路径信息。\n" +
            "默认为当前平台上的\"＜program_name＞.exe\"",
        elements: {
            program_name: {
                name: "程序名",
                desc: "＜program_name＞",
            },
        },
    },
    output_dir: {
        name: "输出目录",
        desc: "指定存放中间文件和最终输出文件的位置。选定目录将存放构建文件夹，发行文件夹，二进制文件等。默认为当前目录。",
        elements: {
            current_directory: {
                name: "当前目录",
                desc: "当前目录",
            },
        },
    },
    remove_output: {
        name: "删除构建文件夹",
        desc: "生成exe或者模块文件后删除构建文件夹。默认关闭。",
    },
    enable_plugins: {
        name: "启用插件",
        desc: "启用插件。必须为插件名称。默认为空",
        elements: {
            anti_bloat: {
                name: "反膨胀",
                desc: "从广泛使用的库模块源代码中去除愚蠢的导入补丁。",
            },
            data_files: {
                name: "包含数据文件",
                desc: "包含由包配置文件指定的数据文件。",
            },
            delvewheel: {
                name: "delvewheel支持",
                desc: "支持在独立模式下使用 delvewheel 的软件包",
            },
            dill_compat: {
                name: "dill包兼容性支持",
                desc: "支持\'dill\'包的兼容性",
            },
            dll_files: {
                name: "包含DLL文件",
                desc: "根据包配置文件包含DLL配置文件",
            },
            enum_compat: {
                name: "enum兼容",
                desc: "支持Python2和enum包",
            },
            eventlet: {
                name: "eventlet支持",
                desc: "支持包含 'eventlet' 依赖项及其对 'dns' 包的猴子补丁需求。",
            },
            gevent: {
                name: "gevent支持",
                desc: "支持gevent包",
            },
            gi: {
                name: "GI支持",
                desc: "支持GI包的typelib依赖",
            },
            glfw: {
                name: "支持glfw",
                desc: "支持在独立模式下使用 'OpenGL' (PyOpenGL) 和 'glfw' 包",
            },
            implicit_imports: {
                name: "隐式导入",
                desc: "根据包配置文件提供隐式导入。",
            },
            kivy: {
                name: "kivy支持",
                desc: "支持 'kivy' 包。",
            },
            matplotlib: {
                name: "matplotlib支持",
                desc: "支持 'matplotlib' 模块。",
            },
            multiprocessing: {
                name: "multiprocessing支持",
                desc: "支持 Python 的 'multiprocessing' 模块。",
            },
            no_qt: {
                name: "禁用Qt",
                desc: "禁用独立模式下的所有 Qt 绑定。",
            },
            options_nanny: {
                name: "选项通知",
                desc: "根据包配置文件通知用户潜在问题。",
            },
            pbr_compat: {
                name: "pbr兼容支持",
                desc: "支持在独立模式下使用 'pbr' 包。",
            },
            pkg_resources: {
                name: "pkg resources支持",
                desc: "解决pkg resources的方法",
            },
            pmw_freezer: {
                name: "pmw 支持",
                desc: "支持'Pmw'包",
            },
            pylint_warnings: {
                name: "pylint警告",
                desc: "支持 PyLint / PyDev 代码标记。",
            },
            pyqt5: {
                name: "PyQt5支持",
                desc: "支持 'PyQt5' 包。",
            },
            pyqt6: {
                name: "PyQt6支持",
                desc: "支持 'PyQt6' 包",
            },
            pyside2: {
                name: "PySide2支持",
                desc: "支持 'PySide2' 包",
            },
            pyside6: {
                name: "PySide6支持",
                desc: "支持 'PySide6' 包",
            },
            pywebview: {
                name: "支持PyWebview",
                desc: "支持 'webview' 包（PyPI 上的 pywebview）。",
            },
            tk_inter: {
                name: "Tkinter支持",
                desc: "支持 Python 的 Tk 模块。",
            },
            transformers: {
                name: "transformers隐式导入",
                desc: "为 transformers 包提供隐式导入。",
            },
            upx: {
                name: "自动使用upx",
                desc: "自动使用 UPX 压缩创建的二进制文件。",
            },
        },
    },
    disable_plugins: {
        name: "禁用插件",
        desc: "禁用插件。必须为插件名称。使用'--plugin-list'查询完整列表并退出。大多数情况下禁用标准插件并不是一个好主意。默认为空。",
        elements: {
            anti_bloat: {
                name: "反膨胀",
                desc: "从广泛使用的库模块源代码中去除愚蠢的导入补丁。",
            },
            data_files: {
                name: "包含数据文件",
                desc: "包含由包配置文件指定的数据文件。",
            },
            delvewheel: {
                name: "delvewheel支持",
                desc: "支持在独立模式下使用 delvewheel 的软件包",
            },
            dill_compat: {
                name: "dill包兼容性支持",
                desc: "支持\'dill\'包的兼容性",
            },
            dll_files: {
                name: "包含DLL文件",
                desc: "根据包配置文件包含DLL配置文件",
            },
            enum_compat: {
                name: "enum兼容",
                desc: "支持Python2和enum包",
            },
            eventlet: {
                name: "eventlet支持",
                desc: "支持包含 'eventlet' 依赖项及其对 'dns' 包的猴子补丁需求。",
            },
            gevent: {
                name: "gevent支持",
                desc: "支持gevent包",
            },
            gi: {
                name: "GI支持",
                desc: "支持GI包的typelib依赖",
            },
            glfw: {
                name: "支持glfw",
                desc: "支持在独立模式下使用 'OpenGL' (PyOpenGL) 和 'glfw' 包",
            },
            implicit_imports: {
                name: "隐式导入",
                desc: "根据包配置文件提供隐式导入。",
            },
            kivy: {
                name: "kivy支持",
                desc: "支持 'kivy' 包。",
            },
            matplotlib: {
                name: "matplotlib支持",
                desc: "支持 'matplotlib' 模块。",
            },
            multiprocessing: {
                name: "multiprocessing支持",
                desc: "支持 Python 的 'multiprocessing' 模块。",
            },
            no_qt: {
                name: "禁用Qt",
                desc: "禁用独立模式下的所有 Qt 绑定。",
            },
            options_nanny: {
                name: "选项通知",
                desc: "根据包配置文件通知用户潜在问题。",
            },
            pbr_compat: {
                name: "pbr兼容支持",
                desc: "支持在独立模式下使用 'pbr' 包。",
            },
            pkg_resources: {
                name: "pkg resources支持",
                desc: "解决pkg resources的方法",
            },
            pmw_freezer: {
                name: "pmw 支持",
                desc: "支持'Pmw'包",
            },
            pylint_warnings: {
                name: "pylint警告",
                desc: "支持 PyLint / PyDev 代码标记。",
            },
            pyqt5: {
                name: "PyQt5支持",
                desc: "支持 'PyQt5' 包。",
            },
            pyqt6: {
                name: "PyQt6支持",
                desc: "支持 'PyQt6' 包",
            },
            pyside2: {
                name: "PySide2支持",
                desc: "支持 'PySide2' 包",
            },
            pyside6: {
                name: "PySide6支持",
                desc: "支持 'PySide6' 包",
            },
            pywebview: {
                name: "支持PyWebview",
                desc: "支持 'webview' 包（PyPI 上的 pywebview）。",
            },
            tk_inter: {
                name: "Tkinter支持",
                desc: "支持 Python 的 Tk 模块。",
            },
            transformers: {
                name: "transformers隐式导入",
                desc: "为 transformers 包提供隐式导入。",
            },
            upx: {
                name: "自动使用upx",
                desc: "自动使用 UPX 压缩创建的二进制文件。",
            },
        },
    },
    report: {
        name: "输出报告",
        desc: "输入一个XML文件名，在XML输出文件中报告模块、数据文件、编译、插件等详细信息。这对于报告问题也非常有用。\n" +
            "例如，这些报告可以用于使用’–create-environment-from-report’轻松重建环境，但报告包含大量信息。默认关闭。",
    },
    show_memory: {
        name: "显示内存",
        desc: "显示内存使用情况。默认关闭。",
    },
    windows_console_mode: {
        name: "Windows控制台模式",
        desc: "选择要使用的控制台模式，默认模式是force",
        elements: {
            force: {
                name: "强制创建",
                desc: "这将在如果没有可用的控制台窗口时，就创建一个，即程序是从一个控制台窗口启动的。",
            },
            disable: {
                name: "禁用控制台",
                desc: "不会创建或使用控制台。",
            },
            attach: {
                name: "附加到现有",
                desc: "使用现有的控制台进行输出",
            },
            hide: {
                name: "隐藏模式",
                desc: "新生成的控制台将被隐藏，而已经存在的控制台将像 '强制模式' 一样行为",
            },
        },
    },
    windows_icon_from_ico: {
        name: "windows图标(ico文件)",
        desc: "添加可执行文件的图标。可以多次给出不同分辨率或者包含多个图标的文件。在选择包含多个图标的文件时，\n" +
            "您也可以使用＃＜n＞后缀来指定要包含的特定图标并忽略其他所有的图标，其中n是从1开始的整数索引",
    },
    // 编译器设置 compiler settings
    clang: {
        name: "强制使用clang",
        desc: "强制使用 clang 编译。在 Windows 系统上，这需要一个正常运行的 Visual Studio 版本来支持。默认关闭。",
    },
    mingw64: {
        name: "强制使用mingw64",
        desc: "强制在 Windows 上使用 MinGW64。默认为关闭，除非使用 MSYS2 和 MinGW Python。",
    },
    msvc: {
        name: "使用MSVC版本",
        desc: "强制在Windows上使用特定的MSVC版本。允许的值有\"14.3\" (MSVC 2022)和其他MSVC版本号。\n" +
            "使用 \"list \"以获得已安装编译器的列表，或使用 \"latest\"。默认在有的情况下使用最新的MSVC。否则使用MinGW64。",
        elements: {
            latest: {
                name: "最新版",
                desc: "使用最新的MSVC版本",
            },
        },
    },
    // Control the following into imported modules(控制导入模块)
    follow_imports: {
        name: "导入已导入的模块",
        desc: "导入所有被导入的模块。在独立模式下默认开启，否则关闭",
    },
    follow_import_to: {
        name: "跟随导入到模块",
        desc: "如果使用了该模块，则跟随到该模块，或者如果是一个包，则跟随到整个包。可以多次给出。默认为空。",
    },
    nofollow_import_to: {
        name: "不跟随导入模块",
        desc: "即使使用了该模块名称也不要跟随导入该模块，或者如果是一个包名称，无论如何都不要跟随导入整个包，该选项覆盖所有其他选项。\n" +
            "这也可以包含模式，例如 \"*.tests\"。可以多次给出。默认为空。",
    },
    nofollow_imports: {
        name: "不进行所有导入",
        desc: "不递归深入(导入)到任何导入的模块，这将覆盖所有其他包含选项，并且不能用于独立模式。默认关闭。",
    },
    follow_stdlib: {
        name: "跟随导入标准库",
        desc: "也深入到从标准库导入的模块，这将大大增加编译时间，而且目前也没有很好的测试，有时候也可能不会工作。默认关闭。",
    },
    // Binary Version Information(二进制版本信息)
    company_name: {
        name: "公司名称",
        desc: "要在版本信息中使用的公司名称。默认为无。",
    },
    product_name: {
        name: "产品名称",
        desc: "要在版本信息中使用的产品名称。默认为二进制文件的基本文件名。",
    },
    file_version: {
        name: "文件版本",
        desc: "要在版本信息中使用的文件版本。必须为一个最多4个数字的序列，例如1.0或1.0.0.0,不允许使用更多的数字或者使用字符串。默认为无。",
    },
    product_version: {
        name: "产品版本",
        desc: "要在版本信息中使用的产品版本。必须为一个最多4个数字的序列，例如1.0或1.0.0.0, 不允许使用更多的数字或者使用字符串。默认为无。",
    },
    file_description: {
        name: "文件描述",
        desc: "要在版本信息中使用的文件描述。目前仅限Windows。默认为二进制文件的文件名。",
    },
    copyright: {
        name: "版权文本",
        desc: "在版本信息中使用的版权信息。目前仅限Windows/macOS可用。默认不显示。",
    },
    trademarks: {
        name: "商标文本",
        desc: "要在版本信息中使用的商标。目前仅限Windows/macOS可用。默认不显示。",
    },
};
