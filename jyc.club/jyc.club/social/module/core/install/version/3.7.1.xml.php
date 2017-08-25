<upgrade>
	<phpfox_update_settings>
		<setting>
			<group>formatting</group>
			<module_id>core</module_id>
			<is_hidden>0</is_hidden>
			<type>large_string</type>
			<var_name>html_purifier_allowed_html</var_name>
			<phrase_var_name>setting_html_purifier_allowed_html</phrase_var_name>
			<ordering>9</ordering>
			<version_id>3.6.0rc1</version_id>
			<value><![CDATA[br,p,em,u,ul,li,font,ol,div[class|style],span[style],blockquote,strike,b,strong,img[src|alt|class|height|width],a[href|rel|target],iframe[src|width|height|frameborder],object[width|height|data],param[name|value],embed[src|type|allowscriptaccess|allowfullscreen|width|height]]]></value>
		</setting>
		<setting>
			<group>image_processing</group>
			<module_id>core</module_id>
			<is_hidden>0</is_hidden>
			<type>drop</type>
			<var_name>watermark_option</var_name>
			<phrase_var_name>setting_watermark_option</phrase_var_name>
			<ordering>1</ordering>
			<version_id>2.0.0rc1</version_id>
			<value><![CDATA[a:2:{s:7:"default";s:4:"none";s:6:"values";a:3:{i:0;s:4:"none";i:1;s:6:" image";i:2;s:5:" text";}}]]></value>
		</setting>
		<setting>
			<group>image_processing</group>
			<module_id>core</module_id>
			<is_hidden>0</is_hidden>
			<type>integer</type>
			<var_name>watermark_opacity</var_name>
			<phrase_var_name>setting_watermark_opacity</phrase_var_name>
			<ordering>3</ordering>
			<version_id>2.0.0rc1</version_id>
			<value>100</value>
		</setting>
		<setting>
			<group>image_processing</group>
			<module_id>core</module_id>
			<is_hidden>0</is_hidden>
			<type>drop</type>
			<var_name>watermark_image_position</var_name>
			<phrase_var_name>setting_watermark_image_position</phrase_var_name>
			<ordering>4</ordering>
			<version_id>2.0.0rc1</version_id>
			<value><![CDATA[a:2:{s:7:"default";s:12:"bottom_right";s:6:"values";a:4:{i:0;s:12:"bottom_right";i:1;s:12:" bottom_left";i:2;s:9:" top_left";i:3;s:10:" top_right";}}]]></value>
		</setting>
		<setting>
			<group>image_processing</group>
			<module_id>core</module_id>
			<is_hidden>0</is_hidden>
			<type>string</type>
			<var_name>watermark_image</var_name>
			<phrase_var_name>setting_watermark_image</phrase_var_name>
			<ordering>2</ordering>
			<version_id>2.0.0rc1</version_id>
			<value>watermark%s.png</value>
		</setting>
	</phpfox_update_settings>
</upgrade>