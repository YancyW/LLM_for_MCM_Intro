# 静态网站部署指南

本文档将指导您如何将导出的静态网站（位于`out`文件夹中）部署到常见的静态网站托管平台。

## 先决条件

1.  您已经拥有一个包含静态网站文件的 `out` 文件夹。
2.  您拥有以下至少一个平台的账户：
    *   GitHub (用于 GitHub Pages)
    *   Netlify
    *   Vercel
    *   其他支持静态文件托管的服务（如 AWS S3, Google Cloud Storage等）

## 部署步骤

### 方法一：使用 Vercel

Vercel 是 Next.js 的创建者，对 Next.js 项目（包括静态导出的）有非常好的支持。

1.  **登录 Vercel**: 访问 [vercel.com](https://vercel.com/) 并使用您的 GitHub/GitLab/Bitbucket 账户登录。
2.  **导入项目**:
    *   点击 "Add New..." -> "Project"。
    *   连接您的 Git 提供商并选择包含您 Next.js 项目的仓库。
    *   Vercel 通常会自动检测到是 Next.js 项目。
3.  **配置项目**:
    *   **Framework Preset**: 应自动识别为 Next.js。
    *   **Build and Output Settings**: 
        *   确保 "Output Directory" 设置为 `out` (如果您的 `next.config.js` 中配置了 `output: 'export'`, Vercel 通常能正确处理，有时可能需要手动指定或它会默认为 `.next` 然后处理静态导出)。对于纯静态导出，直接上传 `out` 目录内容也是一个选项。
        *   如果直接上传 `out` 目录的内容，您可以将构建命令留空或设置为简单的echo，并将发布目录设置为 `out` 或根目录（取决于您如何上传）。
4.  **部署**: 点击 "Deploy"。

**替代方案 (手动拖拽部署 `out` 目录):**
1.  将您的项目中的 `out` 文件夹压缩成一个 `.zip` 文件。
2.  在 Vercel Dashboard，您可以直接拖拽这个 `out` 文件夹（或其压缩包，Vercel CLI 支持）进行部署，或者使用 Vercel CLI：
    ```bash
    npm install -g vercel
    vercel login
    cd path/to/your/project/out  # 进入 out 目录
    vercel --prod             # 或者直接在项目根目录运行 vercel --prod，它会根据配置构建和部署
    ```

### 方法二：使用 Netlify

Netlify 也是一个非常流行的静态网站托管平台。

1.  **登录 Netlify**: 访问 [netlify.com](https://www.netlify.com/) 并登录。
2.  **添加新站点**:
    *   点击 "Add new site" -> "Import an existing project" (如果代码在Git仓库)。
    *   或者，您可以直接拖拽 `out` 文件夹到 Netlify 的部署区域。
3.  **从 Git 仓库部署**:
    *   连接您的 Git 提供商并选择仓库。
    *   **Build settings**:
        *   **Build command**: `npm run build` (或者 `next build`，如果 `package.json` 中是这样配置的，并且 `next.config.js` 中有 `output: 'export'`)。
        *   **Publish directory**: `out`
4.  **部署站点**: 点击 "Deploy site"。

### 方法三：使用 GitHub Pages

GitHub Pages 非常适合托管开源项目或个人静态站点。

1.  **准备仓库**:
    *   确保您的 Next.js 项目是一个 GitHub 仓库。
    *   您的 `out` 文件夹中的内容需要被推送到仓库中，通常是推送到 `gh-pages` 分支，或者主分支的 `/docs` 目录，或者主分支的根目录（取决于您的仓库配置）。
2.  **配置 `next.config.js` (如果需要)**:
    *   如果您的 GitHub Pages 站点不是在根域名 (例如 `username.github.io/repository-name/`)，您可能需要在 `next.config.js` 中设置 `basePath`：
      ```javascript
      // next.config.js
      module.exports = {
        output: 'export',
        basePath: '/repository-name', // 替换为您的仓库名称
        assetPrefix: '/repository-name/', // 替换为您的仓库名称
        images: {
          unoptimized: true,
        }
      };
      ```
    *   修改后需要重新运行 `npm run build`。
3.  **推送 `out` 目录内容到 GitHub**:
    *   最简单的方法是手动将 `out` 目录的内容复制到您的仓库的特定位置（如主分支的根目录或 `/docs` 目录），或者使用类似 `gh-pages` 的工具自动推送 `out` 目录到 `gh-pages` 分支。
    ```bash
    npm install --save-dev gh-pages
    # 在 package.json 的 scripts 中添加:
    # "deploy": "npm run build && gh-pages -d out"
    npm run deploy
    ```
4.  **配置 GitHub Pages 源**:
    *   在您的 GitHub 仓库页面，进入 "Settings" -> "Pages"。
    *   在 "Source" 部分，选择您推送静态文件的分支（例如 `gh-pages` 分支和 `/ (root)` 目录，或者 `main` 分支和 `/docs` 目录）。
    *   点击 "Save"。
5.  您的网站将在几分钟后在 `http://<username>.github.io/<repository-name>` 上线。

## 通用提示

*   **自定义域名**: 大多数平台都支持绑定自定义域名，具体请参考相应平台的文档。
*   **环境变量**: 如果您的应用需要环境变量（尽管静态导出后通常不依赖运行时环境变量），请在托管平台的设置中配置它们（主要用于构建过程）。
*   **HTTPS**: 主流静态托管平台会自动为您的站点提供免费的 HTTPS。

通过以上任一方法，您都可以成功部署您的静态 Next.js 网站。选择最适合您工作流程和需求的平台即可。

