// ==================== 国际化配置 ====================
const translations = {
    'zh': {
        brand_title: '文多多 AiPPT',
        page1_title: '🤖 AI智能生成PPT演示文稿',
        page1_steps: '生成大纲 ---&gt; 挑选模板 ---&gt; 实时生成PPT',
        subject_label: '主题：',
        subject_placeholder: '请输入PPT主题',
        generate_outline_btn: '生成大纲',
        next_to_template_btn: '下一步：选择模板',
        select_template_title: '---- 选择模板 ----',
        next_to_generate_btn: '下一步：生成PPT',
        templates_loading: '模板加载中...',
        generating_msg: '正在生成中，请稍后...',
        generating_progress: '正在生成中，进度',
        insert_element_title: '-- 插入元素 --',
        insert_title1: '插入大标题',
        insert_title2: '插入副标题',
        insert_content: '插入正文文本',
        insert_image: '插入图片',
        insert_geometry: '插入随机形状',
        insert_table: '插入表格',
        insert_bar_chart: '插入柱状图',
        insert_pie_chart: '插入饼图',
        insert_doughnut_chart: '插入环形图',
        insert_line_chart: '插入折线图',
        download_options_title: '-- 下载选项 --',
        download_no_animation: '不添加动画',
        download_with_animation: '智能添加动画',
        download_pptx_btn: '渲染pptx并下载',
        rendering: '正在渲染中...',
        load_more_templates: '换一批',
        alert_empty_subject: '请输入主题',
        alert_subject_too_short: '主题太短',
        alert_subject_too_long: '主题太长，不能超过30字',
        alert_outline_error: '生成大纲异常：',
        alert_ppt_error: '生成PPT异常：',
        alert_download_error: '下载失败：',
        seconds: '秒',
        // ppt2json.html 页面翻译
        ppt2json_title: 'ppt2json',
        refresh_json: '刷新',
        refresh_json_title: '刷新JSON数据',
        download_json: '下载json文件',
        download_json_title: '下载json数据',
        render_download_pptx: '渲染pptx并下载',
        render_download_pptx_title: '渲染pptx并下载',
        edit_mode_label: '编辑模式：',
        parsing_msg: '解析中，请稍后...',
        please_select_file: '请选择文件',
        file_too_large: '文件不能超过50M',
        read_error: '读取错误: ',
        rendering_pptx: '正在渲染中...',
        http_status: 'http status: ',
        // 示例数据翻译
        table_cell: '第{row}行{col}列',
        chart_title: '图表标题',
        chart_sales: '销售额',
        chart_q1: '第一季度',
        chart_q2: '第二季度',
        chart_q3: '第三季度',
        chart_q4: '第四季度',
        chart_series: '系列 {n}',
        chart_category: '类别 {n}'
    },
    'en': {
        brand_title: 'Docmee AI PPT',
        page1_title: '🤖 AI-Powered PPT Generation',
        page1_steps: 'Generate Outline ---&gt; Choose Template ---&gt; Generate PPT',
        subject_label: 'Topic:',
        subject_placeholder: 'Enter PPT topic',
        generate_outline_btn: 'Generate Outline',
        next_to_template_btn: 'Next: Choose Template',
        select_template_title: '---- Select Template ----',
        next_to_generate_btn: 'Next: Generate PPT',
        templates_loading: 'Loading templates...',
        generating_msg: 'Generating, please wait...',
        generating_progress: 'Generating, progress',
        insert_element_title: '-- Insert Element --',
        insert_title1: 'Insert Main Title',
        insert_title2: 'Insert Subtitle',
        insert_content: 'Insert Text Content',
        insert_image: 'Insert Image',
        insert_geometry: 'Insert Random Shape',
        insert_table: 'Insert Table',
        insert_bar_chart: 'Insert Bar Chart',
        insert_pie_chart: 'Insert Pie Chart',
        insert_doughnut_chart: 'Insert Doughnut Chart',
        insert_line_chart: 'Insert Line Chart',
        download_options_title: '-- Download Options --',
        download_no_animation: 'No Animation',
        download_with_animation: 'Smart Animation',
        download_pptx_btn: 'Render & Download PPTX',
        rendering: 'Rendering...',
        load_more_templates: 'Load More',
        alert_empty_subject: 'Please enter a topic',
        alert_subject_too_short: 'Topic is too short',
        alert_subject_too_long: 'Topic is too long, max 30 characters',
        alert_outline_error: 'Outline generation error: ',
        alert_ppt_error: 'PPT generation error: ',
        alert_download_error: 'Download failed: ',
        seconds: 's',
        // ppt2json.html page translations
        ppt2json_title: 'ppt2json',
        refresh_json: 'Refresh',
        refresh_json_title: 'Refresh JSON data',
        download_json: 'Download JSON',
        download_json_title: 'Download JSON data',
        render_download_pptx: 'Render & Download PPTX',
        render_download_pptx_title: 'Render and download PPTX',
        edit_mode_label: 'Edit Mode:',
        parsing_msg: 'Parsing, please wait...',
        please_select_file: 'Please select a file',
        file_too_large: 'File size cannot exceed 50MB',
        read_error: 'Read error: ',
        rendering_pptx: 'Rendering...',
        http_status: 'HTTP status: ',
        // Sample data translations
        table_cell: 'Row {row} Col {col}',
        chart_title: 'Chart Title',
        chart_sales: 'Sales',
        chart_q1: 'Q1',
        chart_q2: 'Q2',
        chart_q3: 'Q3',
        chart_q4: 'Q4',
        chart_series: 'Series {n}',
        chart_category: 'Category {n}'
    }
}

// 当前语言
let currentLanguage = detectLanguage()

/**
 * 检测浏览器语言
 */
function detectLanguage() {
    const savedLang = localStorage.getItem('ppt_language')
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        return savedLang
    }
    const browserLang = navigator.language || navigator.userLanguage
    return browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

/**
 * 切换语言
 */
function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh'
    localStorage.setItem('ppt_language', currentLanguage)
    applyLanguage()
}

/**
 * 获取当前语言
 */
function getCurrentLanguage() {
    return currentLanguage
}

/**
 * 设置语言
 */
function setLanguage(lang) {
    if (lang === 'zh' || lang === 'en') {
        currentLanguage = lang
        localStorage.setItem('ppt_language', currentLanguage)
        applyLanguage()
    }
}

/**
 * 翻译文本
 */
function t(key) {
    return translations[currentLanguage][key] || translations['zh'][key] || key
}

/**
 * 应用语言到页面
 */
function applyLanguage() {
    document.documentElement.lang = currentLanguage
    
    // 更新语言切换按钮
    const langText = document.getElementById('lang-text')
    if (langText) {
        langText.textContent = currentLanguage === 'zh' ? 'EN' : '中文'
    }
    
    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n')
        if (element.tagName === 'INPUT') {
            element.placeholder = t(key)
        } else if (element.tagName === 'OPTION') {
            element.textContent = t(key)
        } else {
            element.innerHTML = t(key)
        }
    })

    // 更新带 data-i18n-placeholder 的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder')
        element.placeholder = t(key)
    })

    // 更新带 data-i18n-title 的元素
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title')
        element.title = t(key)
    })
}

