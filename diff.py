import os
import shutil

def replace_files_from_diff():
    """
    从 .vitepress/diff 文件夹替换匹配的 MD 文件
    """
    # diff 文件夹路径
    diff_folder = os.path.join('.vitepress', 'diff')

    # 如果 diff 文件夹不存在，直接返回
    if not os.path.exists(diff_folder):
        print(f"文件夹 {diff_folder} 不存在")
        return

    # 获取所有以"第X章"开头的文件夹
    chapter_folders = [
        folder for folder in os.listdir('.')
        if os.path.isdir(folder) and folder.startswith('第') and '章' in folder
    ]

    # 遍历 diff 文件夹中的所有 MD 文件
    for diff_file in os.listdir(diff_folder):
        if not diff_file.endswith('.md'):
            continue

        # 遍历章节文件夹
        for chapter_folder in chapter_folders:
            # 目标文件路径
            target_file_path = os.path.join(chapter_folder, diff_file)

            # 如果目标文件存在，则替换
            if os.path.exists(target_file_path):
                source_file_path = os.path.join(diff_folder, diff_file)
                try:
                    shutil.copy2(source_file_path, target_file_path)
                    print(f"替换文件: {target_file_path}")
                except Exception as e:
                    print(f"替换文件 {target_file_path} 时出错: {e}")

    print("文件替换完成")

def replace_files_recursive():
    """
    递归处理子文件夹中的 MD 文件
    """
    # diff 文件夹路径
    diff_folder = os.path.join('.vitepress', 'diff')

    # 如果 diff 文件夹不存在，直接返回
    if not os.path.exists(diff_folder):
        print(f"文件夹 {diff_folder} 不存在")
        return

    # 获取所有以"第X章"开头的文件夹
    chapter_folders = [
        folder for folder in os.listdir('.')
        if os.path.isdir(folder) and folder.startswith('第') and '章' in folder
    ]

    # 遍历 diff 文件夹中的所有 MD 文件
    for diff_file in os.listdir(diff_folder):
        if not diff_file.endswith('.md'):
            continue

        # 遍历章节文件夹
        for chapter_folder in chapter_folders:
            # 递归搜索匹配文件
            for root, _, files in os.walk(chapter_folder):
                if diff_file in files:
                    target_file_path = os.path.join(root, diff_file)
                    source_file_path = os.path.join(diff_folder, diff_file)
                    try:
                        shutil.copy2(source_file_path, target_file_path)
                        print(f"替换文件: {target_file_path}")
                    except Exception as e:
                        print(f"替换文件 {target_file_path} 时出错: {e}")

    print("文件递归替换完成")

def main():
    # 可选择直接替换或递归替换
    replace_files_recursive()

if __name__ == '__main__':
    main()