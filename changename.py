import os

def rename_photos(directory, prefix):
    # 獲取指定目錄下所有的文件
    files = os.listdir(directory)
    # 過濾出.jpg結尾的文件，你可以根據需要修改擴展名
    photos = [file for file in files if file.lower().endswith('.png')]
    # 排序檔案名稱，確保按照原有順序重新命名
    photos.sort()
    # 遍歷所有照片並重新命名
    for index, photo in enumerate(photos, start=14):
        # 建立新的文件名
        new_name = f"{prefix}{index}.jpg"
        # 建立原始和新的完整路徑
        old_path = os.path.join(directory, photo)
        new_path = os.path.join(directory, new_name)
        # 重命名操作
        os.rename(old_path, new_path)
        print(f"Renamed '{photo}' to '{new_name}'")

# 使用範例
# directory_path = '/Users/janice/Desktop/janice_sport_blog/blog/other/pic/0218'
directory_path = '/Users/janice/Desktop/janice_sport_blog/blog/other/pic/0716'
prefix = '0716-'
rename_photos(directory_path, prefix)
